from flask import Flask, request, jsonify, render_template_string
import speech_recognition as sr
import io

app = Flask(__name__)

@app.route('/')
def index():
    return render_template_string(open('index.html').read())

@app.route('/transcribe', methods=['POST'])
def transcribe_audio():
    audio_file = request.files['audio']
    recognizer = sr.Recognizer()

    with io.BytesIO(audio_file.read()) as file:
        with sr.AudioFile(file) as source:
            audio = recognizer.record(source)
            try:
                text = recognizer.recognize_google(audio)
                return jsonify({'transcription': text}), 200
            except sr.UnknownValueError:
                return jsonify({'error': 'Speech recognition failed.'}), 400

if __name__ == '__main__':
    app.run(debug=True)
