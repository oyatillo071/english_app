// ============================================================
//  ENGLISH BEGINNER QUIZ - MA'LUMOTLAR BAZASI (KENGAYTIRILGAN)
// ============================================================

const quizDatabase = {
  to_be: {
    title: "To Be (am / is / are)",
    questions: [
      {
        q: "____ you excited about the concert tonight?",
        options: ["Is", "Are", "Am", "Be"],
        correct: 1,
      },
      {
        q: "She ____ a doctor.",
        options: ["am", "is", "are", "be"],
        correct: 1,
      },
      {
        q: "I ____ from Uzbekistan.",
        options: ["is", "are", "am", "be"],
        correct: 2,
      },
      {
        q: "They ____ my classmates.",
        options: ["is", "am", "be", "are"],
        correct: 3,
      },
      {
        q: "____ he at home now?",
        options: ["Is", "Are", "Am", "Do"],
        correct: 0,
      },
      {
        q: "We ____ not tired.",
        options: ["is", "am", "are", "be"],
        correct: 2,
      },
      {
        q: "It ____ a beautiful day.",
        options: ["am", "is", "are", "do"],
        correct: 1,
      },
      {
        q: "____ I late for the meeting?",
        options: ["Is", "Are", "Am", "Was"],
        correct: 2,
      },
      {
        q: "My parents ____ very kind.",
        options: ["is", "am", "are", "be"],
        correct: 2,
      },
      {
        q: "This book ____ interesting.",
        options: ["am", "are", "is", "be"],
        correct: 2,
      },
    ],
  },

  pronouns: {
    title: "Personal Pronouns (I, You, He...)",
    questions: [
      {
        q: "____ is my brother. He is a student.",
        options: ["She", "He", "It", "They"],
        correct: 1,
      },
      {
        q: "Look at Anna. ____ is very tall.",
        options: ["He", "It", "She", "They"],
        correct: 2,
      },
      {
        q: "____ am a teacher.",
        options: ["He", "I", "You", "It"],
        correct: 1,
      },
      {
        q: "Peter and I are friends. ____ study together.",
        options: ["They", "We", "You", "He"],
        correct: 1,
      },
      {
        q: "This is a car. ____ is red.",
        options: ["He", "She", "It", "They"],
        correct: 2,
      },
      {
        q: "My friends are nice. ____ help me a lot.",
        options: ["It", "She", "He", "They"],
        correct: 3,
      },
      {
        q: "Can you help ____? (me)",
        options: ["I", "me", "my", "mine"],
        correct: 1,
      },
      {
        q: "Where is Tom? ____ is in the kitchen.",
        options: ["She", "He", "It", "We"],
        correct: 1,
      },
      {
        q: "I have a cat. ____ name is Max.",
        options: ["He", "His", "Its", "It"],
        correct: 2,
      },
      {
        q: "Sara and Mike are married. ____ live in London.",
        options: ["He", "She", "They", "It"],
        correct: 2,
      },
    ],
  },

  articles: {
    title: "Articles (a / an / the)",
    questions: [
      {
        q: "I saw ____ elephant at the zoo.",
        options: ["a", "an", "the", "-"],
        correct: 1,
      },
      {
        q: "There is ____ book on the table.",
        options: ["a", "an", "the", "-"],
        correct: 0,
      },
      {
        q: "____ sun rises in the east.",
        options: ["A", "An", "The", "-"],
        correct: 2,
      },
      {
        q: "He is ____ honest man.",
        options: ["a", "an", "the", "-"],
        correct: 1,
      },
      {
        q: "Can you pass me ____ apple, please?",
        options: ["a", "an", "the", "-"],
        correct: 1,
      },
      {
        q: "My father is ____ engineer.",
        options: ["a", "an", "the", "-"],
        correct: 1,
      },
      {
        q: "We visited ____ museum yesterday.",
        options: ["a", "an", "the", "-"],
        correct: 0,
      },
      {
        q: "____ moon is bright tonight.",
        options: ["A", "An", "The", "-"],
        correct: 2,
      },
      {
        q: "She bought ____ umbrella because it was raining.",
        options: ["a", "an", "the", "-"],
        correct: 1,
      },
      {
        q: "I need ____ pen to write this letter.",
        options: ["a", "an", "the", "-"],
        correct: 0,
      },
    ],
  },

  plural_nouns: {
    title: "Plural Nouns (Ko'plik shakli)",
    questions: [
      {
        q: "I have two ____. (book)",
        options: ["book", "books", "bookes", "bookies"],
        correct: 1,
      },
      {
        q: "There are many ____ in the garden. (flower)",
        options: ["flower", "flowers", "flowerss", "flowery"],
        correct: 1,
      },
      {
        q: "The ____ are playing in the park. (child)",
        options: ["childs", "childes", "children", "child"],
        correct: 2,
      },
      {
        q: "She has three ____. (box)",
        options: ["boxs", "boxes", "box", "boxies"],
        correct: 1,
      },
      {
        q: "I saw two ____ on the farm. (sheep)",
        options: ["sheeps", "sheep", "sheepes", "sheepies"],
        correct: 1,
      },
      {
        q: "There are five ____ in my family. (person)",
        options: ["persons", "people", "peoples", "person"],
        correct: 1,
      },
      {
        q: "He has two ____. (foot)",
        options: ["foots", "feets", "feet", "footes"],
        correct: 2,
      },
      {
        q: "The ____ are swimming in the lake. (fish)",
        options: ["fishes", "fish", "fishs", "fishies"],
        correct: 1,
      },
      {
        q: "My sister has many ____. (dress)",
        options: ["dress", "dresss", "dresses", "dressies"],
        correct: 2,
      },
      {
        q: "There are two ____ in the classroom. (window)",
        options: ["window", "windowes", "windowies", "windows"],
        correct: 3,
      },
    ],
  },

  demonstratives: {
    title: "This / That / These / Those",
    questions: [
      {
        q: "____ is my bag. (it is next to me)",
        options: ["This", "That", "These", "Those"],
        correct: 0,
      },
      {
        q: "____ are my shoes over there, far from me.",
        options: ["This", "That", "These", "Those"],
        correct: 3,
      },
      {
        q: "Look at ____ car right here next to us.",
        options: ["this", "that", "these", "those"],
        correct: 0,
      },
      {
        q: "Can you see ____ mountains far in the distance?",
        options: ["this", "that", "these", "those"],
        correct: 3,
      },
      {
        q: "____ is my friend, Alex. (introducing, he is near you)",
        options: ["This", "That", "These", "Those"],
        correct: 0,
      },
      {
        q: "____ apples here in my hand are fresh.",
        options: ["This", "That", "These", "Those"],
        correct: 2,
      },
      {
        q: "____ house over there belongs to my uncle.",
        options: ["This", "That", "These", "Those"],
        correct: 1,
      },
      {
        q: "I like ____ pen you are holding right now (near you).",
        options: ["this", "that", "these", "those"],
        correct: 1,
      },
      {
        q: "____ flowers here on my desk smell wonderful.",
        options: ["This", "That", "These", "Those"],
        correct: 2,
      },
      {
        q: "Whose is ____ bicycle standing next to the door?",
        options: ["this", "that", "these", "those"],
        correct: 0,
      },
    ],
  },

  possessives: {
    title: "Possessive Adjectives (my, your, his...)",
    questions: [
      {
        q: "This is ____ book. (I)",
        options: ["me", "my", "mine", "I"],
        correct: 1,
      },
      {
        q: "Is this ____ car? (you)",
        options: ["you", "your", "yours", "yourself"],
        correct: 1,
      },
      {
        q: "She loves ____ family. (she)",
        options: ["her", "hers", "she", "herself"],
        correct: 0,
      },
      {
        q: "The dog wags ____ tail. (it)",
        options: ["it", "its", "it's", "itself"],
        correct: 1,
      },
      {
        q: "We did ____ homework. (we)",
        options: ["us", "our", "ours", "we"],
        correct: 1,
      },
      {
        q: "They lost ____ keys. (they)",
        options: ["them", "their", "theirs", "they"],
        correct: 1,
      },
      {
        q: "He forgot ____ umbrella. (he)",
        options: ["him", "his", "he", "himself"],
        correct: 1,
      },
      {
        q: "____ names are John and Mary. (we)",
        options: ["We", "Us", "Our", "Ours"],
        correct: 2,
      },
      {
        q: "Is that ____ pen? (you)",
        options: ["you", "your", "yours", "yourself"],
        correct: 1,
      },
      {
        q: "The cat is licking ____ paw. (it)",
        options: ["it's", "its", "it", "itself"],
        correct: 1,
      },
    ],
  },

  there_is_are: {
    title: "There is / There are",
    questions: [
      {
        q: "____ a book on the table.",
        options: ["There is", "There are", "There am", "It is"],
        correct: 0,
      },
      {
        q: "____ many students in the class.",
        options: ["There is", "There are", "There am", "It are"],
        correct: 1,
      },
      {
        q: "____ an apple in the basket.",
        options: ["There is", "There are", "There am", "It is"],
        correct: 0,
      },
      {
        q: "____ two cars in the garage.",
        options: ["There is", "There are", "There am", "It are"],
        correct: 1,
      },
      {
        q: "____ some milk in the fridge.",
        options: ["There is", "There are", "There am", "It is"],
        correct: 0,
      },
      {
        q: "____ any questions?",
        options: ["Is there", "Are there", "Am there", "Do there"],
        correct: 1,
      },
      {
        q: "____ a cat under the bed.",
        options: ["There is", "There are", "There am", "It is"],
        correct: 0,
      },
      {
        q: "____ three windows in this room.",
        options: ["There is", "There are", "There am", "It are"],
        correct: 1,
      },
      {
        q: "____ not much time left.",
        options: ["There is", "There are", "There am", "It is"],
        correct: 0,
      },
      {
        q: "____ a lot of people at the party.",
        options: ["There is", "There are", "There am", "It are"],
        correct: 1,
      },
    ],
  },

  present_simple: {
    title: "Present Simple Tense",
    questions: [
      {
        q: "She ____ to school every day. (go)",
        options: ["go", "goes", "going", "gone"],
        correct: 1,
      },
      {
        q: "I ____ coffee in the morning. (drink)",
        options: ["drink", "drinks", "drinking", "drunk"],
        correct: 0,
      },
      {
        q: "He does ____ like fish.",
        options: ["not", "no", "isn't", "don't"],
        correct: 0,
      },
      {
        q: "____ you speak English?",
        options: ["Are", "Is", "Do", "Does"],
        correct: 2,
      },
      {
        q: "My mother ____ dinner every evening. (cook)",
        options: ["cook", "cooks", "cooking", "cooked"],
        correct: 1,
      },
      {
        q: "They ____ football on weekends. (play)",
        options: ["play", "plays", "playing", "played"],
        correct: 0,
      },
      {
        q: "____ it rain a lot here?",
        options: ["Do", "Does", "Is", "Are"],
        correct: 1,
      },
      {
        q: "We ____ not watch TV at night.",
        options: ["do", "does", "is", "are"],
        correct: 0,
      },
      {
        q: "The sun ____ in the east. (rise)",
        options: ["rise", "rises", "rising", "risen"],
        correct: 1,
      },
      {
        q: "____ your sister live in London?",
        options: ["Do", "Does", "Is", "Are"],
        correct: 1,
      },
    ],
  },

  prepositions: {
    title: "Prepositions of Place (in, on, under...)",
    questions: [
      {
        q: "The book is ____ the table.",
        options: ["in", "on", "under", "between"],
        correct: 1,
      },
      {
        q: "The cat is ____ the box.",
        options: ["in", "on", "next to", "under"],
        correct: 0,
      },
      {
        q: "The keys are ____ the bag.",
        options: ["on", "in", "under", "between"],
        correct: 1,
      },
      {
        q: "She is standing ____ the door.",
        options: ["under", "in", "next to", "on"],
        correct: 2,
      },
      {
        q: "The picture is ____ the wall.",
        options: ["on", "in", "under", "next to"],
        correct: 0,
      },
      {
        q: "The ball is ____ the chair.",
        options: ["on", "in", "under", "between"],
        correct: 2,
      },
      {
        q: "There is a lamp ____ the desk.",
        options: ["under", "on", "between", "next to"],
        correct: 1,
      },
      {
        q: "The school is ____ the bank and the park.",
        options: ["in", "on", "under", "between"],
        correct: 3,
      },
      {
        q: "He is sitting ____ his friend.",
        options: ["under", "in", "next to", "on"],
        correct: 2,
      },
      {
        q: "The shoes are ____ the bed.",
        options: ["on", "in", "under", "between"],
        correct: 2,
      },
    ],
  },

  question_words: {
    title: "Question Words (what, where, when...)",
    questions: [
      {
        q: "____ is your name?",
        options: ["Who", "What", "Where", "When"],
        correct: 1,
      },
      {
        q: "____ are you from?",
        options: ["What", "Who", "Where", "Why"],
        correct: 2,
      },
      {
        q: "____ is your birthday?",
        options: ["Who", "What", "Where", "When"],
        correct: 3,
      },
      {
        q: "____ is that man over there?",
        options: ["Who", "What", "Where", "When"],
        correct: 0,
      },
      {
        q: "____ are you late for class?",
        options: ["What", "Why", "Who", "When"],
        correct: 1,
      },
      {
        q: "____ old are you?",
        options: ["What", "Who", "How", "Where"],
        correct: 2,
      },
      {
        q: "____ books do you have?",
        options: ["How much", "How many", "How old", "What"],
        correct: 1,
      },
      {
        q: "____ money do you need?",
        options: ["How many", "How much", "How old", "What"],
        correct: 1,
      },
      {
        q: "____ is your favorite color?",
        options: ["Who", "What", "Where", "Why"],
        correct: 1,
      },
      {
        q: "____ do you live?",
        options: ["What", "Who", "Where", "Why"],
        correct: 2,
      },
    ],
  },

  some_any: {
    title: "Some / Any",
    questions: [
      {
        q: "I have ____ apples in my bag.",
        options: ["some", "any", "a", "an"],
        correct: 0,
      },
      {
        q: "I don't have ____ money.",
        options: ["some", "any", "a", "an"],
        correct: 1,
      },
      {
        q: "Is there ____ milk in the fridge?",
        options: ["some", "any", "a", "an"],
        correct: 1,
      },
      {
        q: "There are ____ books on the shelf.",
        options: ["some", "any", "a", "an"],
        correct: 0,
      },
      {
        q: "Do you have ____ questions?",
        options: ["some", "any", "a", "an"],
        correct: 1,
      },
      {
        q: "We don't have ____ time.",
        options: ["some", "any", "a", "an"],
        correct: 1,
      },
      {
        q: "Can I have ____ water, please? (so'rov)",
        options: ["some", "any", "a", "an"],
        correct: 0,
      },
      {
        q: "There isn't ____ sugar left.",
        options: ["some", "any", "a", "an"],
        correct: 1,
      },
      {
        q: "She has ____ friends in London.",
        options: ["some", "any", "a", "an"],
        correct: 0,
      },
      {
        q: "Are there ____ chairs in the room?",
        options: ["some", "any", "a", "an"],
        correct: 1,
      },
    ],
  },

  can_ability: {
    title: "Can (imkoniyat va ruxsat)",
    questions: [
      {
        q: "I ____ swim very well.",
        options: ["can", "is", "am", "does"],
        correct: 0,
      },
      {
        q: "She ____ not speak French.",
        options: ["can", "cans", "canning", "could"],
        correct: 0,
      },
      {
        q: "____ you drive a car?",
        options: ["Do", "Can", "Are", "Does"],
        correct: 1,
      },
      {
        q: "Birds ____ fly.",
        options: ["can", "cans", "is", "does"],
        correct: 0,
      },
      {
        q: "He ____ play the piano.",
        options: ["can", "cans", "canning", "is can"],
        correct: 0,
      },
      {
        q: "We ____ not come to the party tonight.",
        options: ["can", "does", "is", "do"],
        correct: 0,
      },
      {
        q: "____ I open the window? (ruxsat so'rash)",
        options: ["Do", "Can", "Am", "Does"],
        correct: 1,
      },
      {
        q: "My brother ____ ride a bike.",
        options: ["can", "cans", "is can", "does can"],
        correct: 0,
      },
      {
        q: "They ____ not understand the lesson.",
        options: ["can", "cans", "is", "does"],
        correct: 0,
      },
      {
        q: "____ your sister cook well?",
        options: ["Does", "Can", "Is", "Do"],
        correct: 1,
      },
    ],
  },

  have_got: {
    title: "Have got / Has got",
    questions: [
      {
        q: "I ____ got a new phone.",
        options: ["have", "has", "am", "is"],
        correct: 0,
      },
      {
        q: "She ____ got two brothers.",
        options: ["have", "has", "am", "is"],
        correct: 1,
      },
      {
        q: "____ you got a pen?",
        options: ["Has", "Have", "Is", "Do"],
        correct: 1,
      },
      {
        q: "He ____ not got a car.",
        options: ["have", "has", "am", "do"],
        correct: 1,
      },
      {
        q: "We ____ got a big house.",
        options: ["have", "has", "am", "is"],
        correct: 0,
      },
      {
        q: "____ she got a dog?",
        options: ["Have", "Has", "Does", "Do"],
        correct: 1,
      },
      {
        q: "They ____ got any children. (negative)",
        options: ["haven't", "hasn't", "don't", "aren't"],
        correct: 0,
      },
      {
        q: "My father ____ got a beard.",
        options: ["have", "has", "is", "am"],
        correct: 1,
      },
      {
        q: "____ they got a garden?",
        options: ["Has", "Have", "Is", "Do"],
        correct: 1,
      },
      {
        q: "I ____ not got much time.",
        options: ["have", "has", "am", "do"],
        correct: 0,
      },
    ],
  },

  present_continuous: {
    title: "Present Continuous (hozirgi davomli)",
    questions: [
      {
        q: "I ____ reading a book now.",
        options: ["am", "is", "are", "be"],
        correct: 0,
      },
      {
        q: "She ____ cooking dinner at the moment.",
        options: ["am", "is", "are", "be"],
        correct: 1,
      },
      {
        q: "They ____ playing football right now.",
        options: ["am", "is", "are", "be"],
        correct: 2,
      },
      {
        q: "____ you watching TV?",
        options: ["Am", "Is", "Are", "Do"],
        correct: 2,
      },
      {
        q: "He ____ not sleeping now.",
        options: ["am", "is", "are", "does"],
        correct: 1,
      },
      {
        q: "We ____ studying English this week.",
        options: ["am", "is", "are", "be"],
        correct: 2,
      },
      {
        q: "____ it raining outside?",
        options: ["Am", "Is", "Are", "Does"],
        correct: 1,
      },
      {
        q: "The children ____ doing their homework now.",
        options: ["am", "is", "are", "be"],
        correct: 2,
      },
      {
        q: "I ____ not working today.",
        options: ["am", "is", "are", "does"],
        correct: 0,
      },
      {
        q: "____ she talking on the phone?",
        options: ["Am", "Is", "Are", "Does"],
        correct: 1,
      },
    ],
  },

  comparatives: {
    title: "Comparative Adjectives (qiyoslash)",
    questions: [
      {
        q: "This book is ____ than that one. (interesting)",
        options: [
          "interesting",
          "more interesting",
          "interestinger",
          "most interesting",
        ],
        correct: 1,
      },
      {
        q: "My car is ____ than yours. (fast)",
        options: ["fast", "faster", "more fast", "fastest"],
        correct: 1,
      },
      {
        q: "Today is ____ than yesterday. (hot)",
        options: ["hot", "hoter", "hotter", "more hot"],
        correct: 2,
      },
      {
        q: "She is ____ than her sister. (tall)",
        options: ["tall", "taller", "more tall", "tallest"],
        correct: 1,
      },
      {
        q: "This exercise is ____ than the last one. (difficult)",
        options: [
          "difficult",
          "difficulter",
          "more difficult",
          "most difficult",
        ],
        correct: 2,
      },
      {
        q: "Elephants are ____ than mice. (big)",
        options: ["big", "bigger", "more big", "biggest"],
        correct: 1,
      },
      {
        q: "My house is ____ than his. (small)",
        options: ["small", "smaller", "more small", "smallest"],
        correct: 1,
      },
      {
        q: "Winter is ____ than summer here. (cold)",
        options: ["cold", "colder", "more cold", "coldest"],
        correct: 1,
      },
      {
        q: "He is ____ than me. (old)",
        options: ["old", "older", "more old", "oldest"],
        correct: 1,
      },
      {
        q: "This road is ____ than that one. (long)",
        options: ["long", "longer", "more long", "longest"],
        correct: 1,
      },
    ],
  },
};

// ============================================================
//  GRAMMATIKA NAZARIY QISM (0 dan boyitilgan, chuqur tushuntirish)
// ============================================================

const grammarDatabase = [
  {
    key: "to_be",
    title: "To Be fe'li (am / is / are)",
    icon: "🔑",
    content: `
      <p><b>To be</b> — ingliz tilidagi eng muhim va eng ko'p ishlatiladigan fe'l. U "bo'lmoq" degan ma'noni bildiradi va o'zbek tilida ko'pincha alohida tarjima qilinmaydi (masalan: "I am a student" — "Men talabaman"). Ismlar, kasblar, xususiyatlar, holatlar va his-tuyg'ularni ifodalashda ishlatiladi.</p>
      <p class="font-bold mt-4 mb-2">To be fe'lining 3 shakli bor:</p>
      <table class="w-full text-sm border border-slate-200 rounded-lg overflow-hidden mb-4">
        <thead class="bg-slate-100"><tr><th class="p-2 text-left">Olmosh</th><th class="p-2 text-left">To be</th><th class="p-2 text-left">Qisqartma</th><th class="p-2 text-left">Misol</th></tr></thead>
        <tbody>
          <tr class="border-t"><td class="p-2 font-bold">I</td><td class="p-2 text-blue-600 font-bold">am</td><td class="p-2">I'm</td><td class="p-2">I am Aziz.</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">He / She / It</td><td class="p-2 text-blue-600 font-bold">is</td><td class="p-2">he's / she's / it's</td><td class="p-2">She is a teacher.</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">You / We / They</td><td class="p-2 text-blue-600 font-bold">are</td><td class="p-2">you're / we're / they're</td><td class="p-2">They are students.</td></tr>
        </tbody>
      </table>
      <p class="font-bold mt-4 mb-2">3 xil gap turi:</p>
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Darak gap (+):</b> I am happy. / She is busy. / We are ready.</li>
        <li><b>Inkor gap (−):</b> I am not tired. / They are not (aren't) here. / He is not (isn't) at home.</li>
        <li><b>Savol gap (?):</b> Are you ready? / Is he at home? / Am I right?</li>
      </ul>
      <p class="font-bold mt-4 mb-2">Wh- so'roq so'zlari bilan:</p>
      <p>To be ko'pincha savol so'zlari bilan birga keladi: <i>What is your name? Where are you from? How old are you? Who is that man?</i></p>
      <p class="font-bold mt-4 mb-2">Tez-tez uchraydigan xatolar:</p>
      <ul class="list-disc pl-5 space-y-1">
        <li>❌ "I is happy" → ✅ "I am happy" (I bilan doim "am")</li>
        <li>❌ "She are a doctor" → ✅ "She is a doctor" (u/u/u bilan doim "is")</li>
        <li>❌ "They is my friends" → ✅ "They are my friends" (ko'plikda doim "are")</li>
      </ul>
      <p class="mt-4">Qisqartma (contraction) shakllar nutqda juda ko'p ishlatiladi: <b>I'm, you're, he's, she's, it's, we're, they're</b>, inkorda esa <b>isn't, aren't</b> ("am not" uchun qisqartma yo'q, faqat "I'm not" ishlatiladi).</p>
    `,
  },
  {
    key: "pronouns",
    title: "Olmoshlar (I, you, he, she, it...)",
    icon: "🧑",
    content: `
      <p>Shaxs olmoshlari (personal pronouns) — otlar o'rniga ishlatiladigan so'zlar. Gapni takrorlamaslik uchun kerak. Ular ikki turga bo'linadi: <b>ega olmoshlari (subject pronouns)</b> — gapning egasi bo'lib keladi, va <b>to'ldiruvchi olmoshlari (object pronouns)</b> — fe'ldan yoki predlogdan keyin keladi.</p>
      <table class="w-full text-sm border border-slate-200 rounded-lg overflow-hidden my-4">
        <thead class="bg-slate-100"><tr><th class="p-2 text-left">Ega (Subject)</th><th class="p-2 text-left">To'ldiruvchi (Object)</th><th class="p-2 text-left">O'zbek</th></tr></thead>
        <tbody>
          <tr class="border-t"><td class="p-2 font-bold">I</td><td class="p-2 font-bold text-blue-600">me</td><td class="p-2">men</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">You</td><td class="p-2 font-bold text-blue-600">you</td><td class="p-2">sen / siz</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">He</td><td class="p-2 font-bold text-blue-600">him</td><td class="p-2">u (erkak)</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">She</td><td class="p-2 font-bold text-blue-600">her</td><td class="p-2">u (ayol)</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">It</td><td class="p-2 font-bold text-blue-600">it</td><td class="p-2">u (narsa/hayvon)</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">We</td><td class="p-2 font-bold text-blue-600">us</td><td class="p-2">biz</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">They</td><td class="p-2 font-bold text-blue-600">them</td><td class="p-2">ular</td></tr>
        </tbody>
      </table>
      <p>Ega olmoshi misoli: "Anna is my friend. <b>She</b> is kind." — Anna ismini takrorlamaslik uchun "she" ishlatildi.</p>
      <p class="mt-2">To'ldiruvchi olmoshi misoli: "I don't understand. Can you help <b>me</b>?" — bu yerda "me" fe'ldan (help) keyin kelmoqda.</p>
    `,
  },
  {
    key: "articles",
    title: "Artikllar (a / an / the)",
    icon: "📎",
    content: `
      <p>Artikl — otdan oldin keladigan kichik so'z bo'lib, o'zbek tilida mavjud emas, shuning uchun ko'pincha xato qilinadi.</p>
      <ul class="list-disc pl-5 space-y-2 mt-3">
        <li><b>a</b> — undosh tovush bilan boshlanadigan so'zdan oldin: <i>a book, a car, a university</i> (diqqat: "university" harfi unli, lekin talaffuzda "yu" undosh tovush kabi eshitiladi)</li>
        <li><b>an</b> — unli tovush (a, e, i, o, u) bilan boshlanadigan so'zdan oldin: <i>an apple, an hour, an egg</i> ("hour" so'zida "h" harfi talaffuz qilinmaydi, shuning uchun "an")</li>
        <li><b>the</b> — aniq, ma'lum bir narsa haqida gapirilganda, yoki dunyoda yagona narsalar uchun: <i>The sun is hot. The book on the table is mine. The Earth is round.</i></li>
      </ul>
      <p class="mt-4"><b>Muhim:</b> "a/an" — noaniq artikl (biror-bir, umumiy narsa haqida birinchi marta gapirilganda), "the" — aniq artikl (o'sha, allaqachon aytilgan yoki hammaga ma'lum narsa).</p>
      <p class="mt-2">Misol: "I saw <b>a</b> dog in the street. <b>The</b> dog was black." — birinchi gapda "a dog" (noma'lum it), ikkinchi gapda "the dog" (allaqachon aytilgan, ma'lum it).</p>
      <p class="font-bold mt-4 mb-2">Artikl ishlatilmaydigan holatlar:</p>
      <ul class="list-disc pl-5 space-y-1">
        <li>Sanaladigan bo'lmagan otlar bilan umumiy ma'noda: <i>Water is important. Love is beautiful.</i></li>
        <li>Ko'plik otlar umumiy ma'noda: <i>Dogs are loyal animals.</i></li>
        <li>Shaxsiy ismlar va shaharlar bilan: <i>Tashkent is a beautiful city.</i></li>
      </ul>
    `,
  },
  {
    key: "plural_nouns",
    title: "Otlarning ko'plik shakli",
    icon: "📚",
    content: `
      <p>Inglizchada otlarni ko'plikka aylantirish uchun odatda oxiriga <b>-s</b> yoki <b>-es</b> qo'shiladi.</p>
      <table class="w-full text-sm border border-slate-200 rounded-lg overflow-hidden my-4">
        <thead class="bg-slate-100"><tr><th class="p-2 text-left">Qoida</th><th class="p-2 text-left">Misol</th></tr></thead>
        <tbody>
          <tr class="border-t"><td class="p-2">Ko'pchilik so'zlarga <b>-s</b></td><td class="p-2">book → books, car → cars</td></tr>
          <tr class="border-t"><td class="p-2">-s, -x, -ch, -sh, -o bilan tugasa <b>-es</b></td><td class="p-2">box → boxes, watch → watches, potato → potatoes</td></tr>
          <tr class="border-t"><td class="p-2">Undosh + y bilan tugasa: y → ies</td><td class="p-2">city → cities, baby → babies</td></tr>
          <tr class="border-t"><td class="p-2">-f / -fe bilan tugasa: f → ves</td><td class="p-2">leaf → leaves, knife → knives, wife → wives</td></tr>
          <tr class="border-t"><td class="p-2">Noto'g'ri (irregular) shakllar</td><td class="p-2">man → men, woman → women, child → children, foot → feet, tooth → teeth, person → people, mouse → mice</td></tr>
          <tr class="border-t"><td class="p-2">O'zgarmaydigan so'zlar</td><td class="p-2">sheep → sheep, fish → fish, deer → deer</td></tr>
        </tbody>
      </table>
      <p>Bu qoidalarni yodlab olish grammatikani to'g'ri qo'llash uchun juda muhim, chunki ko'plik otlar deyarli har bir gapda uchraydi.</p>
    `,
  },
  {
    key: "demonstratives",
    title: "This / That / These / Those",
    icon: "👉",
    content: `
      <p>Bu ko'rsatish olmoshlari narsaning masofasi (yaqin/uzoq) va soniga (birlik/ko'plik) qarab tanlanadi.</p>
      <table class="w-full text-sm border border-slate-200 rounded-lg overflow-hidden my-4">
        <thead class="bg-slate-100"><tr><th class="p-2 text-left"></th><th class="p-2 text-left">Yaqin</th><th class="p-2 text-left">Uzoq</th></tr></thead>
        <tbody>
          <tr class="border-t"><td class="p-2 font-bold">Birlik</td><td class="p-2">this (bu)</td><td class="p-2">that (u, ana u)</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">Ko'plik</td><td class="p-2">these (bular)</td><td class="p-2">those (ular, ana ular)</td></tr>
        </tbody>
      </table>
      <p>Misollar: <i>This is my pen (qo'limdagi). That is your house (narida). These are my books (yonimda). Those are birds (osmonda uzoqda).</i></p>
      <p class="mt-3">Savol gaplarda ham keng qo'llaniladi: <i>What is this? Who are those people? Is that your car?</i></p>
      <p class="mt-2">Telefon suhbatlarida ham ishlatiladi: <i>"Hello, who is this?" — "Is that John?"</i></p>
    `,
  },
  {
    key: "possessives",
    title: "Egalik olmoshlari (my, your, his...)",
    icon: "🏷️",
    content: `
      <p>Egalik sifatlari (possessive adjectives) — kimningdir narsasi ekanligini bildiradi va har doim otdan oldin keladi. Bulardan tashqari <b>egalik olmoshlari (possessive pronouns)</b> ham bor — ular otning o'rnini bosadi va yolg'iz o'zi keladi.</p>
      <table class="w-full text-sm border border-slate-200 rounded-lg overflow-hidden my-4">
        <thead class="bg-slate-100"><tr><th class="p-2 text-left">Olmosh</th><th class="p-2 text-left">Egalik sifati (+ ot)</th><th class="p-2 text-left">Egalik olmoshi (yolg'iz)</th></tr></thead>
        <tbody>
          <tr class="border-t"><td class="p-2">I</td><td class="p-2 font-bold text-blue-600">my book</td><td class="p-2 font-bold text-purple-600">mine</td></tr>
          <tr class="border-t"><td class="p-2">you</td><td class="p-2 font-bold text-blue-600">your book</td><td class="p-2 font-bold text-purple-600">yours</td></tr>
          <tr class="border-t"><td class="p-2">he</td><td class="p-2 font-bold text-blue-600">his book</td><td class="p-2 font-bold text-purple-600">his</td></tr>
          <tr class="border-t"><td class="p-2">she</td><td class="p-2 font-bold text-blue-600">her book</td><td class="p-2 font-bold text-purple-600">hers</td></tr>
          <tr class="border-t"><td class="p-2">it</td><td class="p-2 font-bold text-blue-600">its tail</td><td class="p-2 font-bold text-purple-600">—</td></tr>
          <tr class="border-t"><td class="p-2">we</td><td class="p-2 font-bold text-blue-600">our book</td><td class="p-2 font-bold text-purple-600">ours</td></tr>
          <tr class="border-t"><td class="p-2">they</td><td class="p-2 font-bold text-blue-600">their book</td><td class="p-2 font-bold text-purple-600">theirs</td></tr>
        </tbody>
      </table>
      <p>Farqiga e'tibor bering: <i>This is <b>my</b> book</i> (otdan oldin) va <i>This book is <b>mine</b></i> (yolg'iz, otsiz).</p>
    `,
  },
  {
    key: "there_is_are",
    title: "There is / There are",
    icon: "📍",
    content: `
      <p>"There is / There are" — biror joyda biror narsa borligini aytish uchun ishlatiladi ("bor" degan ma'noda).</p>
      <ul class="list-disc pl-5 space-y-2 mt-3">
        <li><b>There is</b> + birlik ot: <i>There is a book on the table.</i></li>
        <li><b>There are</b> + ko'plik ot: <i>There are two books on the table.</i></li>
        <li>Savol: <b>Is there...? / Are there...?</b> — <i>Is there any milk? Are there any questions?</i></li>
        <li>Inkor: <b>There isn't / There aren't</b> — <i>There isn't any bread. There aren't any chairs.</i></li>
        <li>"Some" va "any" bilan birga tez-tez ishlatiladi: darak gapda <b>some</b> (There is some water), inkor va savolda <b>any</b> (There isn't any water. Is there any water?)</li>
      </ul>
      <p class="mt-3">Diqqat qiling: "There" bu yerda "u yerda" degan ma'noni bildirmaydi, balki shunchaki "bor/mavjud" degan tuzilma boshlovchisi hisoblanadi.</p>
    `,
  },
  {
    key: "present_simple",
    title: "Present Simple zamoni",
    icon: "⏰",
    content: `
      <p>Present Simple — odatiy, doimiy harakatlar yoki haqiqatlarni ifodalash uchun ishlatiladi (masalan, kundalik odatlar, jadval, umumiy haqiqatlar).</p>
      <p class="font-bold mt-3 mb-1">Muhim qoida:</p>
      <p>He / She / It bilan fe'lga <b>-s</b> yoki <b>-es</b> qo'shiladi: <i>She works. He watches TV. It rains.</i></p>
      <table class="w-full text-sm border border-slate-200 rounded-lg overflow-hidden my-4">
        <thead class="bg-slate-100"><tr><th class="p-2 text-left">-s / -es qoidasi</th><th class="p-2 text-left">Misol</th></tr></thead>
        <tbody>
          <tr class="border-t"><td class="p-2">Ko'pchilik fe'llarga -s</td><td class="p-2">play → plays, eat → eats</td></tr>
          <tr class="border-t"><td class="p-2">-o, -ch, -sh, -ss, -x, -z bilan tugasa -es</td><td class="p-2">go → goes, watch → watches, wash → washes</td></tr>
          <tr class="border-t"><td class="p-2">Undosh + y bilan tugasa: y → ies</td><td class="p-2">study → studies, cry → cries</td></tr>
        </tbody>
      </table>
      <table class="w-full text-sm border border-slate-200 rounded-lg overflow-hidden my-4">
        <thead class="bg-slate-100"><tr><th class="p-2 text-left">Gap turi</th><th class="p-2 text-left">Misol</th></tr></thead>
        <tbody>
          <tr class="border-t"><td class="p-2">Darak (+)</td><td class="p-2">I play football. She plays football.</td></tr>
          <tr class="border-t"><td class="p-2">Inkor (−)</td><td class="p-2">I don't play. She doesn't play.</td></tr>
          <tr class="border-t"><td class="p-2">Savol (?)</td><td class="p-2">Do you play? Does she play?</td></tr>
        </tbody>
      </table>
      <p><b>Do</b> — I/you/we/they bilan, <b>Does</b> — he/she/it bilan ishlatiladi (does bilan ishlatilganda asosiy fe'lga -s qo'shilmaydi: does she play, emas "does she plays").</p>
      <p class="font-bold mt-4 mb-2">Chastota qo'shimchalari (Adverbs of frequency):</p>
      <p>always (doimo), usually (odatda), often (tez-tez), sometimes (ba'zan), never (hech qachon) — bu so'zlar odatda asosiy fe'ldan oldin, lekin "to be"dan keyin keladi: <i>I always drink tea. She is never late.</i></p>
    `,
  },
  {
    key: "prepositions",
    title: "O'rin predloglari (in, on, under...)",
    icon: "📦",
    content: `
      <p>Predloglar narsalarning bir-biriga nisbatan qayerda joylashganini ko'rsatadi.</p>
      <table class="w-full text-sm border border-slate-200 rounded-lg overflow-hidden my-4">
        <thead class="bg-slate-100"><tr><th class="p-2 text-left">Predlog</th><th class="p-2 text-left">Ma'nosi</th><th class="p-2 text-left">Misol</th></tr></thead>
        <tbody>
          <tr class="border-t"><td class="p-2 font-bold">in</td><td class="p-2">ichida</td><td class="p-2">in the box</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">on</td><td class="p-2">ustida</td><td class="p-2">on the table</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">under</td><td class="p-2">ostida</td><td class="p-2">under the bed</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">next to</td><td class="p-2">yonida</td><td class="p-2">next to the door</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">between</td><td class="p-2">o'rtasida</td><td class="p-2">between the bank and the park</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">behind</td><td class="p-2">orqasida</td><td class="p-2">behind the house</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">in front of</td><td class="p-2">oldida</td><td class="p-2">in front of the school</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">above</td><td class="p-2">tepasida (tegmasdan)</td><td class="p-2">above the clouds</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">near</td><td class="p-2">yaqinida</td><td class="p-2">near the river</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">opposite</td><td class="p-2">qarshisida</td><td class="p-2">opposite the shop</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    key: "question_words",
    title: "So'roq so'zlari (what, where, when...)",
    icon: "❓",
    content: `
      <table class="w-full text-sm border border-slate-200 rounded-lg overflow-hidden my-4">
        <thead class="bg-slate-100"><tr><th class="p-2 text-left">So'z</th><th class="p-2 text-left">Ma'nosi</th><th class="p-2 text-left">Misol</th></tr></thead>
        <tbody>
          <tr class="border-t"><td class="p-2 font-bold">What</td><td class="p-2">nima</td><td class="p-2">What is your name?</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">Who</td><td class="p-2">kim</td><td class="p-2">Who is that?</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">Where</td><td class="p-2">qayerda</td><td class="p-2">Where do you live?</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">When</td><td class="p-2">qachon</td><td class="p-2">When is your birthday?</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">Why</td><td class="p-2">nega</td><td class="p-2">Why are you late?</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">How</td><td class="p-2">qanday</td><td class="p-2">How are you?</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">Which</td><td class="p-2">qaysi (tanlov)</td><td class="p-2">Which color do you like?</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">Whose</td><td class="p-2">kimniki</td><td class="p-2">Whose bag is this?</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">How many</td><td class="p-2">nechta (sanaladigan)</td><td class="p-2">How many books?</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">How much</td><td class="p-2">qancha (sanalmaydigan)</td><td class="p-2">How much money?</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    key: "some_any",
    title: "Some / Any",
    icon: "🔸",
    content: `
      <p><b>Some</b> va <b>any</b> — "biroz, ba'zi" degan ma'noni bildiradi va sanaladigan ko'plik hamda sanalmaydigan otlar bilan ishlatiladi.</p>
      <table class="w-full text-sm border border-slate-200 rounded-lg overflow-hidden my-4">
        <thead class="bg-slate-100"><tr><th class="p-2 text-left">Gap turi</th><th class="p-2 text-left">So'z</th><th class="p-2 text-left">Misol</th></tr></thead>
        <tbody>
          <tr class="border-t"><td class="p-2">Darak (+)</td><td class="p-2 font-bold text-blue-600">some</td><td class="p-2">I have some money.</td></tr>
          <tr class="border-t"><td class="p-2">Inkor (−)</td><td class="p-2 font-bold text-blue-600">any</td><td class="p-2">I don't have any money.</td></tr>
          <tr class="border-t"><td class="p-2">Savol (?)</td><td class="p-2 font-bold text-blue-600">any</td><td class="p-2">Do you have any money?</td></tr>
        </tbody>
      </table>
      <p class="mt-3"><b>Istisno:</b> Taklif qilish yoki so'rash uchun savol gapda ham "some" ishlatiladi: <i>Would you like some tea? Can I have some water, please?</i></p>
    `,
  },
  {
    key: "can_ability",
    title: "Can (imkoniyat va ruxsat)",
    icon: "💪",
    content: `
      <p><b>Can</b> — modal fe'l bo'lib, imkoniyat (qila olish), ko'nikma yoki ruxsatni ifodalaydi. U barcha olmoshlar bilan bir xil shaklda qo'llanadi (o'zgarmaydi, -s qo'shilmaydi).</p>
      <table class="w-full text-sm border border-slate-200 rounded-lg overflow-hidden my-4">
        <thead class="bg-slate-100"><tr><th class="p-2 text-left">Gap turi</th><th class="p-2 text-left">Tuzilishi</th><th class="p-2 text-left">Misol</th></tr></thead>
        <tbody>
          <tr class="border-t"><td class="p-2">Darak (+)</td><td class="p-2">Subject + can + fe'l</td><td class="p-2">I can swim.</td></tr>
          <tr class="border-t"><td class="p-2">Inkor (−)</td><td class="p-2">Subject + cannot/can't + fe'l</td><td class="p-2">She can't drive.</td></tr>
          <tr class="border-t"><td class="p-2">Savol (?)</td><td class="p-2">Can + subject + fe'l?</td><td class="p-2">Can you cook?</td></tr>
        </tbody>
      </table>
      <p class="mt-3">Ishlatilish sohalari: <b>Imkoniyat</b> — I can speak English. <b>Ruxsat</b> — Can I go out? <b>So'rov</b> — Can you help me?</p>
      <p class="mt-2"><b>Muhim:</b> "can" dan keyin fe'l hech qachon "to" bilan kelmaydi va -s qabul qilmaydi: ❌ "She cans swim" → ✅ "She can swim".</p>
    `,
  },
  {
    key: "have_got",
    title: "Have got / Has got",
    icon: "🎒",
    content: `
      <p>"Have got" va "has got" — egalikni (kimda nima borligini) bildirish uchun ishlatiladi, "have/has" bilan deyarli bir xil ma'noni anglatadi, ammo ingliz tilida (ayniqsa Britaniya inglizchasida) juda keng tarqalgan.</p>
      <table class="w-full text-sm border border-slate-200 rounded-lg overflow-hidden my-4">
        <thead class="bg-slate-100"><tr><th class="p-2 text-left">Olmosh</th><th class="p-2 text-left">Shakli</th><th class="p-2 text-left">Misol</th></tr></thead>
        <tbody>
          <tr class="border-t"><td class="p-2">I / you / we / they</td><td class="p-2 font-bold text-blue-600">have got</td><td class="p-2">I have got a car.</td></tr>
          <tr class="border-t"><td class="p-2">he / she / it</td><td class="p-2 font-bold text-blue-600">has got</td><td class="p-2">She has got a sister.</td></tr>
        </tbody>
      </table>
      <p class="mt-2">Inkor: <b>haven't got / hasn't got</b> — <i>I haven't got a pen. He hasn't got time.</i></p>
      <p class="mt-2">Savol: <b>Have you got...? / Has she got...?</b> — <i>Have you got a car? Has he got a dog?</i></p>
    `,
  },
  {
    key: "present_continuous",
    title: "Present Continuous (hozirgi davomli)",
    icon: "🏃‍♂️",
    content: `
      <p>Present Continuous — hozirgi paytda, aynan gapirilayotgan vaqtda sodir bo'layotgan harakatlarni ifodalaydi ("hozir qilyapman" ma'nosida).</p>
      <p class="font-bold mt-3 mb-1">Tuzilishi:</p>
      <p>Subject + am/is/are + fe'l+ing</p>
      <table class="w-full text-sm border border-slate-200 rounded-lg overflow-hidden my-4">
        <thead class="bg-slate-100"><tr><th class="p-2 text-left">Gap turi</th><th class="p-2 text-left">Misol</th></tr></thead>
        <tbody>
          <tr class="border-t"><td class="p-2">Darak (+)</td><td class="p-2">I am reading a book. She is cooking.</td></tr>
          <tr class="border-t"><td class="p-2">Inkor (−)</td><td class="p-2">I am not reading. She isn't cooking.</td></tr>
          <tr class="border-t"><td class="p-2">Savol (?)</td><td class="p-2">Are you reading? Is she cooking?</td></tr>
        </tbody>
      </table>
      <p class="font-bold mt-4 mb-2">-ing qo'shish qoidalari:</p>
      <ul class="list-disc pl-5 space-y-1">
        <li>Ko'pchilik fe'llarga shunchaki -ing: play → playing, read → reading</li>
        <li>-e bilan tugasa, e tushib qoladi: make → making, write → writing</li>
        <li>Bitta bo'g'inli, bitta unli + bitta undosh bilan tugasa, undosh ikkilanadi: run → running, sit → sitting</li>
      </ul>
      <p class="mt-3">Present Simple bilan farqi: Present Simple — odatiy harakat (I play football every week), Present Continuous — hozir sodir bo'layotgan harakat (I am playing football now).</p>
    `,
  },
  {
    key: "comparatives",
    title: "Comparative Adjectives (qiyoslash darajasi)",
    icon: "⚖️",
    content: `
      <p>Comparative (qiyosiy daraja) — ikki narsa yoki shaxsni solishtirish uchun ishlatiladi va "than" (dan) so'zi bilan birga keladi.</p>
      <table class="w-full text-sm border border-slate-200 rounded-lg overflow-hidden my-4">
        <thead class="bg-slate-100"><tr><th class="p-2 text-left">Sifat turi</th><th class="p-2 text-left">Qoida</th><th class="p-2 text-left">Misol</th></tr></thead>
        <tbody>
          <tr class="border-t"><td class="p-2">Qisqa sifatlar (1 bo'g'in)</td><td class="p-2">+ -er</td><td class="p-2">tall → taller, fast → faster</td></tr>
          <tr class="border-t"><td class="p-2">-e bilan tugasa</td><td class="p-2">+ -r</td><td class="p-2">large → larger, nice → nicer</td></tr>
          <tr class="border-t"><td class="p-2">Unli+undosh bilan tugasa</td><td class="p-2">undosh ikkilanadi + -er</td><td class="p-2">big → bigger, hot → hotter</td></tr>
          <tr class="border-t"><td class="p-2">Undosh+y bilan tugasa</td><td class="p-2">y → i + -er</td><td class="p-2">happy → happier, easy → easier</td></tr>
          <tr class="border-t"><td class="p-2">Uzun sifatlar (2+ bo'g'in)</td><td class="p-2">more + sifat</td><td class="p-2">more interesting, more difficult</td></tr>
          <tr class="border-t"><td class="p-2">Noto'g'ri (irregular)</td><td class="p-2">-</td><td class="p-2">good → better, bad → worse, far → farther</td></tr>
        </tbody>
      </table>
      <p class="mt-3">Misollar: <i>My brother is taller than me. This film is more interesting than that one. Today is colder than yesterday.</i></p>
    `,
  },
];

// ============================================================
//  LUG'AT (VOCABULARY) - Kengaytirilgan, kartochka + talaffuz
// ============================================================

const vocabDatabase = [
  {
    key: "family",
    title: "Oila a'zolari",
    icon: "👨‍👩‍👧‍👦",
    words: [
      { en: "mother", uz: "ona" },
      { en: "father", uz: "ota" },
      { en: "sister", uz: "opa/singil" },
      { en: "brother", uz: "aka/uka" },
      { en: "grandmother", uz: "buvi" },
      { en: "grandfather", uz: "bobo" },
      { en: "son", uz: "o'g'il" },
      { en: "daughter", uz: "qiz" },
      { en: "aunt", uz: "xola/amma" },
      { en: "uncle", uz: "tog'a/amaki" },
      { en: "husband", uz: "er" },
      { en: "wife", uz: "xotin" },
      { en: "parents", uz: "ota-ona" },
      { en: "cousin", uz: "amakivachcha/xolavachcha" },
      { en: "baby", uz: "chaqaloq" },
    ],
  },
  {
    key: "colors",
    title: "Ranglar",
    icon: "🎨",
    words: [
      { en: "red", uz: "qizil" },
      { en: "blue", uz: "ko'k" },
      { en: "green", uz: "yashil" },
      { en: "yellow", uz: "sariq" },
      { en: "black", uz: "qora" },
      { en: "white", uz: "oq" },
      { en: "orange", uz: "to'q sariq" },
      { en: "pink", uz: "pushti" },
      { en: "purple", uz: "binafsha" },
      { en: "brown", uz: "jigarrang" },
      { en: "gray", uz: "kulrang" },
      { en: "gold", uz: "oltin rang" },
    ],
  },
  {
    key: "numbers",
    title: "Sonlar (1-20)",
    icon: "🔢",
    words: [
      { en: "one", uz: "bir" },
      { en: "two", uz: "ikki" },
      { en: "three", uz: "uch" },
      { en: "four", uz: "to'rt" },
      { en: "five", uz: "besh" },
      { en: "six", uz: "olti" },
      { en: "seven", uz: "yetti" },
      { en: "eight", uz: "sakkiz" },
      { en: "nine", uz: "to'qqiz" },
      { en: "ten", uz: "o'n" },
      { en: "eleven", uz: "o'n bir" },
      { en: "twelve", uz: "o'n ikki" },
      { en: "thirteen", uz: "o'n uch" },
      { en: "fifteen", uz: "o'n besh" },
      { en: "twenty", uz: "yigirma" },
    ],
  },
  {
    key: "days",
    title: "Hafta kunlari va oylar",
    icon: "📅",
    words: [
      { en: "Monday", uz: "dushanba" },
      { en: "Tuesday", uz: "seshanba" },
      { en: "Wednesday", uz: "chorshanba" },
      { en: "Thursday", uz: "payshanba" },
      { en: "Friday", uz: "juma" },
      { en: "Saturday", uz: "shanba" },
      { en: "Sunday", uz: "yakshanba" },
      { en: "January", uz: "yanvar" },
      { en: "June", uz: "iyun" },
      { en: "December", uz: "dekabr" },
      { en: "today", uz: "bugun" },
      { en: "tomorrow", uz: "ertaga" },
      { en: "yesterday", uz: "kecha" },
    ],
  },
  {
    key: "food",
    title: "Ovqatlar va ichimliklar",
    icon: "🍽️",
    words: [
      { en: "bread", uz: "non" },
      { en: "water", uz: "suv" },
      { en: "milk", uz: "sut" },
      { en: "apple", uz: "olma" },
      { en: "rice", uz: "guruch" },
      { en: "meat", uz: "go'sht" },
      { en: "egg", uz: "tuxum" },
      { en: "tea", uz: "choy" },
      { en: "coffee", uz: "qahva" },
      { en: "cheese", uz: "pishloq" },
      { en: "soup", uz: "sho'rva" },
      { en: "salad", uz: "salat" },
      { en: "sugar", uz: "shakar" },
      { en: "salt", uz: "tuz" },
      { en: "fruit", uz: "meva" },
      { en: "vegetable", uz: "sabzavot" },
    ],
  },
  {
    key: "animals",
    title: "Hayvonlar",
    icon: "🐾",
    words: [
      { en: "dog", uz: "it" },
      { en: "cat", uz: "mushuk" },
      { en: "bird", uz: "qush" },
      { en: "fish", uz: "baliq" },
      { en: "horse", uz: "ot" },
      { en: "cow", uz: "sigir" },
      { en: "lion", uz: "sher" },
      { en: "elephant", uz: "fil" },
      { en: "rabbit", uz: "quyon" },
      { en: "mouse", uz: "sichqon" },
      { en: "sheep", uz: "qo'y" },
      { en: "chicken", uz: "tovuq" },
      { en: "bear", uz: "ayiq" },
      { en: "wolf", uz: "bo'ri" },
      { en: "monkey", uz: "maymun" },
    ],
  },
  {
    key: "verbs",
    title: "Fe'llar",
    icon: "🏃",
    words: [
      { en: "go", uz: "bormoq" },
      { en: "eat", uz: "yemoq" },
      { en: "drink", uz: "ichmoq" },
      { en: "sleep", uz: "uxlamoq" },
      { en: "read", uz: "o'qimoq" },
      { en: "write", uz: "yozmoq" },
      { en: "run", uz: "yugurmoq" },
      { en: "play", uz: "o'ynamoq" },
      { en: "work", uz: "ishlamoq" },
      { en: "study", uz: "o'qimoq (dars)" },
      { en: "speak", uz: "gapirmoq" },
      { en: "listen", uz: "tinglamoq" },
      { en: "watch", uz: "tomosha qilmoq" },
      { en: "cook", uz: "ovqat pishirmoq" },
      { en: "buy", uz: "sotib olmoq" },
      { en: "help", uz: "yordam bermoq" },
    ],
  },
  {
    key: "adjectives",
    title: "Sifatlar",
    icon: "✨",
    words: [
      { en: "big", uz: "katta" },
      { en: "small", uz: "kichik" },
      { en: "happy", uz: "baxtli" },
      { en: "sad", uz: "xafa" },
      { en: "hot", uz: "issiq" },
      { en: "cold", uz: "sovuq" },
      { en: "fast", uz: "tez" },
      { en: "slow", uz: "sekin" },
      { en: "new", uz: "yangi" },
      { en: "old", uz: "eski/keksa" },
      { en: "beautiful", uz: "chiroyli" },
      { en: "easy", uz: "oson" },
      { en: "difficult", uz: "qiyin" },
      { en: "strong", uz: "kuchli" },
      { en: "weak", uz: "kuchsiz" },
    ],
  },
  {
    key: "body",
    title: "Tana a'zolari",
    icon: "🧍",
    words: [
      { en: "head", uz: "bosh" },
      { en: "hair", uz: "soch" },
      { en: "eye", uz: "ko'z" },
      { en: "ear", uz: "quloq" },
      { en: "nose", uz: "burun" },
      { en: "mouth", uz: "og'iz" },
      { en: "hand", uz: "qo'l" },
      { en: "leg", uz: "oyoq" },
      { en: "arm", uz: "bilak" },
      { en: "finger", uz: "barmoq" },
      { en: "heart", uz: "yurak" },
      { en: "back", uz: "orqa" },
      { en: "shoulder", uz: "yelka" },
    ],
  },
  {
    key: "clothes",
    title: "Kiyimlar",
    icon: "👕",
    words: [
      { en: "shirt", uz: "ko'ylak" },
      { en: "trousers", uz: "shim" },
      { en: "dress", uz: "libos" },
      { en: "shoes", uz: "poyabzal" },
      { en: "jacket", uz: "kurtka" },
      { en: "hat", uz: "shlyapa" },
      { en: "socks", uz: "paypoq" },
      { en: "coat", uz: "palto" },
      { en: "skirt", uz: "yubka" },
      { en: "gloves", uz: "qo'lqop" },
      { en: "scarf", uz: "sharf" },
    ],
  },
  {
    key: "weather",
    title: "Ob-havo",
    icon: "☀️",
    words: [
      { en: "sun", uz: "quyosh" },
      { en: "rain", uz: "yomg'ir" },
      { en: "snow", uz: "qor" },
      { en: "wind", uz: "shamol" },
      { en: "cloud", uz: "bulut" },
      { en: "storm", uz: "bo'ron" },
      { en: "hot", uz: "issiq" },
      { en: "cold", uz: "sovuq" },
      { en: "warm", uz: "iliq" },
      { en: "cool", uz: "salqin" },
      { en: "sunny", uz: "quyoshli" },
      { en: "cloudy", uz: "bulutli" },
    ],
  },
  {
    key: "professions",
    title: "Kasblar",
    icon: "👩‍⚕️",
    words: [
      { en: "teacher", uz: "o'qituvchi" },
      { en: "doctor", uz: "shifokor" },
      { en: "engineer", uz: "muhandis" },
      { en: "lawyer", uz: "advokat" },
      { en: "police officer", uz: "politsiyachi" },
      { en: "driver", uz: "haydovchi" },
      { en: "farmer", uz: "dehqon" },
      { en: "cook", uz: "oshpaz" },
      { en: "nurse", uz: "hamshira" },
      { en: "student", uz: "talaba/o'quvchi" },
      { en: "businessman", uz: "biznesmen" },
      { en: "journalist", uz: "jurnalist" },
    ],
  },
  {
    key: "transport",
    title: "Transport",
    icon: "🚗",
    words: [
      { en: "car", uz: "avtomobil" },
      { en: "bus", uz: "avtobus" },
      { en: "train", uz: "poyezd" },
      { en: "plane", uz: "samolyot" },
      { en: "bicycle", uz: "velosiped" },
      { en: "taxi", uz: "taksi" },
      { en: "ship", uz: "kema" },
      { en: "motorcycle", uz: "mototsikl" },
      { en: "subway", uz: "metro" },
    ],
  },
  {
    key: "feelings",
    title: "His-tuyg'ular",
    icon: "😊",
    words: [
      { en: "happy", uz: "baxtli" },
      { en: "sad", uz: "xafa" },
      { en: "angry", uz: "jahldor" },
      { en: "tired", uz: "charchagan" },
      { en: "excited", uz: "hayajonlangan" },
      { en: "scared", uz: "qo'rqqan" },
      { en: "surprised", uz: "hayron" },
      { en: "bored", uz: "zerikkan" },
      { en: "nervous", uz: "asabiy" },
      { en: "proud", uz: "faxrlanuvchi" },
    ],
  },
  {
    key: "house",
    title: "Uy va xonalar",
    icon: "🏠",
    words: [
      { en: "kitchen", uz: "oshxona" },
      { en: "bedroom", uz: "yotoqxona" },
      { en: "bathroom", uz: "hammom" },
      { en: "living room", uz: "mehmonxona" },
      { en: "door", uz: "eshik" },
      { en: "window", uz: "deraza" },
      { en: "table", uz: "stol" },
      { en: "chair", uz: "stul" },
      { en: "bed", uz: "karavot" },
      { en: "sofa", uz: "divan" },
      { en: "roof", uz: "tom" },
      { en: "garden", uz: "bog'" },
    ],
  },
  {
    key: "school",
    title: "Maktab buyumlari",
    icon: "🎒",
    words: [
      { en: "book", uz: "kitob" },
      { en: "pen", uz: "ruchka" },
      { en: "pencil", uz: "qalam" },
      { en: "notebook", uz: "daftar" },
      { en: "bag", uz: "sumka" },
      { en: "desk", uz: "parta" },
      { en: "board", uz: "doska" },
      { en: "eraser", uz: "o'chirg'ich" },
      { en: "ruler", uz: "chizg'ich" },
      { en: "classroom", uz: "sinf xonasi" },
    ],
  },
  {
    key: "sports",
    title: "Sport turlari",
    icon: "⚽",
    words: [
      { en: "football", uz: "futbol" },
      { en: "basketball", uz: "basketbol" },
      { en: "swimming", uz: "suzish" },
      { en: "running", uz: "yugurish" },
      { en: "tennis", uz: "tennis" },
      { en: "boxing", uz: "boks" },
      { en: "volleyball", uz: "voleybol" },
      { en: "chess", uz: "shaxmat" },
      { en: "cycling", uz: "velosport" },
    ],
  },
];
