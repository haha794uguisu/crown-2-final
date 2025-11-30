let wordList = [
    'biomimicry',
    'conform',
    'accomplish',
    'pesticide',
    'institution',
    'exist',
    'educate',
    'harmful',
    'poison',
    'global warming',
    'harmony',
    'maintain',
    'sustainable',
    'No other living thing ~',
    'far and wide',
    'in harmony with ~',
    'in other words',
    'imitation',
    'imitate',
    'sustain',
    'supporting',
    'threaten',
    'hummingbird',
    'gram',
    'fuel',
    'weight',
    'her',
    'look to ~ for -',
    '~ rather than -',
    'dream about ~',
    'many times ~',
    'tunnel',
    'kingfisher',
    'dive',
    'splash',
    'environmentally',
    'air conditioning',
    'termite',
    'mound',
    'repellent',
    'rough',
    'surface',
    'dirt',
    'generation',
    'sportswear',
    'in the right direction',
    'turn to ~',
    'roll off',
    'aware',
    'forever',
    'judge',
    'innovation',
    'powerful',
    'tool',
    'survival',
    'have an effect on ~',
    'invisible',
    'nutritional',
    'wage',
    'cacao',
    'account',
    'industry',
    'make a wage',
    'related to ~',
    'take a moment to ~',
    'make money',
    'take ~ into account',
    'at the heart of ~',
    'strap',
    'toddler',
    'tow',
    'pod',
    'harvest',
    'attach',
    'pole',
    'income',
    'unfairness',
    'patriarchal',
    'financial',
    'aid',
    'gender',
    'gap',
    'in tow',
    'the size of ~',
    'attached to ~',
    'have no say',
    'needless',
    'Fairtrade',
    'leadership',
    'management',
    'transformation',
    'negotiate',
    'task',
    'budget',
    'previously',
    'needless to say',
    'in peace',
    ];

let meaningList = [
    '生物模倣、生体模倣',
    '適合する、従う',
    '成し遂げる',
    '殺虫剤',
    '施設、機関',
    '存在する',
    '教育する',
    '有害な',
    '毒',
    '地球温暖化',
    '調和',
    '維持する',
    '持続可能な',
    '他の生き物は～しない',
    '広く、広範囲に',
    '～と調和して',
    '言い換えれば',
    '模倣、まね',
    'まねる、模倣する',
    '持続する、支える',
    '支える、支援する<adv>',
    '脅かす',
    'ハチドリ',
    'グラム',
    '燃料',
    '重さ、重量',
    '（詩的な）自然などを指す代名詞／彼女の',
    '～に…を頼る',
    '…よりもむしろ～',
    '～について夢を見る',
    '何度も～',
    'トンネル',
    'カワセミ',
    '飛び込む',
    '水しぶき',
    '環境に優しく',
    '空調、エアコン',
    'シロアリ',
    '塚、土手',
    '忌避剤／はじく',
    '粗い',
    '表面',
    '汚れ、土',
    '世代',
    'スポーツウェア',
    '正しい方向へ',
    '～に頼る、～に目を向ける',
    '転がり落ちる',
    '気づいている、意識している',
    '永遠に',
    '評価する、判断する',
    '革新、新しいアイデア',
    '強力な',
    '道具、手段',
    '生存',
    '～に影響を与える',
    '目に見えない',
    '栄養の、栄養学的な',
    '賃金',
    'カカオ',
    '（～を）考慮する／説明',
    '産業',
    '賃金を得る',
    '～に関連する',
    '時間をとって～する',
    'お金を稼ぐ',
    '～を考慮に入れる',
    '～の中心で',
    'ストラップ、ベルト',
    '幼児、トドラー',
    '牽引する、引っ張る',
    'さや（豆）、ポッド',
    '収穫、収穫する',
    '取り付ける、付ける',
    '棒、柱',
    '収入',
    '不公平',
    '父権制の、家父長的な',
    '財政的な、金融の',
    '援助、支援',
    '性別、ジェンダー',
    '格差、差',
    '引き連れて、同行して',
    '～の大きさ',
    '～に付随した／～に取り付けられた',
    '発言権がない',
    '不必要な、無用の',
    'フェアトレード（公正取引）',
    'リーダーシップ、指導力',
    '経営、管理',
    '変革、変容',
    '交渉する',
    '仕事、課題',
    '予算',
    '以前に、かつて',
    '言うまでもなく',
    '平和に、安らかに',
    ];

function intRandom(min,max){
    return Math.floor(Math.random() * (max-min +1)) + min ;
};

function countInitials(){
    let wordFirst = word.charAt(0);
    for(let i=0; i<initials; i++){
        wordFirst += word.charAt(i+1);
    }
    console.log(wordFirst);
    console.log(word.length);

    let underBar = "";
    for(let i=0; i<word.length-initials-1; i++){
        if(word.charAt(i+initials+1) === " "){
            underBar += "  ";
            continue;
        }else if(word.charAt(i+initials+1) === "-"){
            underBar += "-";
            continue;
        }else if(word.charAt(i+initials+1) === "'"){
            underBar += "'";
            continue;
        }else if(word.charAt(i+initials+1) === ","){
            underBar += ",";
            continue;
        }else if(word.charAt(i+initials+1) === "."){
            underBar += ".";
            continue;
        }else if(word.charAt(i+initials+1) === "~"){
            underBar += "~";
            continue;
        }else if(word.charAt(i+initials+1) === "/"){
            underBar += "/";
            continue;
        }else if(word.charAt(i+initials+1) === "("){
            underBar += "(";
            continue;
        }
        underBar += "_";
    }

    let wordQuestion = wordFirst + underBar;

    document.getElementById("question_word").textContent = wordQuestion;
}

function answer(){
    let tf;
    let inputAnswer = document.getElementById("input_answer");
    if(inputAnswer.value === word){
        tf = true;
    } else {
        tf = false;
    }
    console.log(tf);

    if(inputAnswer.value === ""){
        document.getElementById("your_answer").textContent = "回答していません";
    } else{
        document.getElementById("your_answer").textContent = inputAnswer.value;
    }
    document.getElementById("input_answer").value = "";

    if(tf === true){
        document.getElementById("question_word").textContent = word;
    } else if(tf === false){
        
        if(initials <= word.length-2){
            initials ++;
            countInitials();
        }
        console.log(initials);
    }

}

function showAnswer(){
    document.getElementById("question_word").textContent = word;
}

function next(){
    number = intRandom(1, wordList.length);
    console.log(number);

    word = wordList[number-1];
    console.log(word);

    meaning = meaningList[number-1];
    console.log(meaning);

    document.getElementById("question_meaning").textContent = meaning;

    document.getElementById("your_answer").textContent = "回答していません";

    initials = 0;

    countInitials();
}

let number;
let word;
let meaning;
let initials;
next();

const textbox = document.getElementById('input_answer');

textbox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        if (event.shiftKey) {
            next();
        }else{
            answer();
        }
    }
});
window.addEventListener('DOMContentLoaded', () => {
    

});



