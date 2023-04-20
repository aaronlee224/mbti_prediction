from fastapi import FastAPI, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from joblib import load

app = FastAPI()

app.add_middleware( # process requests and responses
    CORSMiddleware, # Cross-Origin Resource Sharing, let other websites access this web API.
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/predict")
def predict(
    mbti_string: str = Form(...), # string input
):
    try:
        print(mbti_string)
        tfidf_vectorizer = load("./tfidf/tfidf_vectorizer.pickle")

        speech_vector = tfidf_vectorizer.transform([mbti_string]).toarray()

        model_IE = load("./models/model_IE.pickle")
        model_JP = load("./models/model_JP.pickle")
        model_NS = load("./models/model_NS.pickle")
        model_TF = load("./models/model_TF.pickle")

        result = predict_mbti(model_IE, model_NS, model_TF,
                              model_JP, speech_vector)

        print(result)

        return {"mbti": result}
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail=str(e))


# Compile four model outputs together to form the personality
def compile_mbti(ypredIE, ypredNS, ypredTF, ypredJP):
    _IE = 'I'
    _NS = 'N'
    _TF = 'T'
    _JP = 'J'
    if ypredIE == 1.0:
        _IE = 'E'
    if ypredNS == 1.0:
        _NS = 'S'
    if ypredTF == 1.0:
        _TF = 'F'
    if ypredJP == 1.0:
        _JP = 'P'

    mbti = _IE + _NS + _TF + _JP
    return mbti


# This function takes 4 GridSearchCV model as input.
# It fits all 4 models with their respective training data.
# It finds the best estimator of GridSearchCV and uses 
# it to return predicted values of 4 test sets
def predict_mbti(model_IE, model_NS, model_TF, model_JP, speech):
    ypredIE = model_IE.predict(speech)
    ypredNS = model_NS.predict(speech)
    ypredTF = model_TF.predict(speech)
    ypredJP = model_JP.predict(speech)
    mbti = compile_mbti(ypredIE, ypredNS, ypredTF, ypredJP)
    return mbti
