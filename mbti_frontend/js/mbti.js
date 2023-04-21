const mbti_dict = {
  INTJ: {
    title: '"Architect"',
    description:
      "Imaginative and strategic thinkers, with a plan for everything.",
    img_url: "assets/imgs/mbti/INTJ.png",
    mbti_url: "https://www.16personalities.com/intj-personality",
  },
  INTP: {
    title: '"Logician"',
    description:
      "Innovative inventors with an unquenchable thirst for knowledge.",
    img_url: "assets/imgs/mbti/INTP.png",
    mbti_url: "https://www.16personalities.com/intp-personality",
  },
  ENTJ: {
    title: '"Commander"',
    description:
      "Bold, imaginative and strong-willed leaders, always finding a way - or making one.",
    img_url: "assets/imgs/mbti/ENTJ.png",
    mbti_url: "https://www.16personalities.com/entj-personality ",
  },
  ENTP: {
    title: '"Debater"',
    description:
      "Smart and curious thinkers who cannot resist an intellectual challenge.",
    img_url: "assets/imgs/mbti/ENTP.png",
    mbti_url: "https://www.16personalities.com/entp-personality",
  },
  INFJ: {
    title: '"Advocate"',
    description:
      "Quiet and mystical, yet very inspiring and tireless idealists.",
    img_url: "assets/imgs/mbti/INFJ.png",
    mbti_url: "https://www.16personalities.com/infj-personality",
  },
  INFP: {
    title: '"Mediator"',
    description:
      "Poetic, kind and altruistic people, always eager to help a good cause.",
    img_url: "assets/imgs/mbti/INFP.png",
    mbti_url: "https://www.16personalities.com/infp-personality",
  },
  ENFJ: {
    title: '"Protagonist"',
    description:
      "Charismatic and inspiring leaders, able to mesmerize their listeners.",
    img_url: "assets/imgs/mbti/ENFJ.png",
    mbti_url: "https://www.16personalities.com/enfj-personality",
  },
  ENFP: {
    title: '"Campaigner"',
    description:
      "Enthusiastic, creative and sociable free spirits, who can always find a reason to smile.",
    img_url: "assets/imgs/mbti/ENFP.png",
    mbti_url: "https://www.16personalities.com/enfp-personality",
  },
  ISTJ: {
    title: '"Logistician"',
    description:
      "Practical and fact-minded individuals, whose reliability cannot be doubted.",
    img_url: "assets/imgs/mbti/ISTJ.png",
    mbti_url: "https://www.16personalities.com/istj-personality",
  },
  ISFJ: {
    title: '"Defender"',
    description:
      "Very dedicated and warm protectors, always ready to defend their loved ones.",
    img_url: "assets/imgs/mbti/ISFJ.png",
    mbti_url: "https://www.16personalities.com/isfj-personality",
  },
  ESTJ: {
    title: '"Executive"',
    description:
      "Excellent administrators, unsurpassed at managing things - or people.",
    img_url: "assets/imgs/mbti/ESTJ.png",
    mbti_url: "https://www.16personalities.com/estj-personality",
  },
  ESFJ: {
    title: '"Consul"',
    description:
      "Extraordinarily caring, social and popular people, always eager to help.",
    img_url: "assets/imgs/mbti/ESFJ.png",
    mbti_url: "https://www.16personalities.com/esfj-personality",
  },
  ISTP: {
    title: '"Virtuoso"',
    description:
      "Bold and practical experimenters, masters of all kinds of tools.",
    img_url: "assets/imgs/mbti/ISTP.png",
    mbti_url: "https://www.16personalities.com/istp-personality",
  },
  ISFP: {
    title: '"Adventurer"',
    description:
      "Flexible and charming artists, always ready to explore and experience something new.",
    img_url: "assets/imgs/mbti/ISFP.png",
    mbti_url: "https://www.16personalities.com/isfp-personality",
  },
  ESTP: {
    title: '"Entrepreneur"',
    description:
      "Smart, energetic and very perceptive people, who truly enjoy living on the edge.",
    img_url: "assets/imgs/mbti/ESTP.png",
    mbti_url: "https://www.16personalities.com/estp-personality",
  },
  ESFP: {
    title: '"Entertainer"',
    description:
      "Spontaneous, energetic and enthusiastic people - life is never boring around them.",
    img_url: "assets/imgs/mbti/ESFP.png",
    mbti_url: "https://www.16personalities.com/esfp-personality",
  },
};

document.addEventListener("DOMContentLoaded", function (event) {
  var matches = /mbti=([^&#=]*)/.exec(window.location.search);
  var mbti = matches[1];
  console.log(mbti);

  document.getElementById("mbti-result").innerHTML = mbti;
  document.getElementById("mbti-title").innerHTML = mbti_dict[mbti]["title"];
  document.getElementById("mbti-description").innerHTML =
    mbti_dict[mbti]["description"];
  var mbtiCharacterImg = document
    .getElementById("mbti-character")
    .querySelector("img");
  mbtiCharacterImg.src = mbti_dict[mbti]["img_url"];
  document.getElementById("mbti-url").href = mbti_dict[mbti]["mbti_url"];
});