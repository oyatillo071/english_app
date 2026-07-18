// ============================================================
//  ENGLISH BEGINNER QUIZ - MA'LUMOTLAR BAZASI
// ============================================================

const quizDatabase = {
  to_be: {
    title: "To Be (am / is / are)",
    questions: [
      { q: "____ you excited about the concert tonight?", options: ["Is", "Are", "Am", "Be"], correct: 1 },
      { q: "She ____ a doctor.", options: ["am", "is", "are", "be"], correct: 1 },
      { q: "I ____ from Uzbekistan.", options: ["is", "are", "am", "be"], correct: 2 },
      { q: "They ____ my classmates.", options: ["is", "am", "be", "are"], correct: 3 },
      { q: "____ he at home now?", options: ["Is", "Are", "Am", "Do"], correct: 0 },
      { q: "We ____ not tired.", options: ["is", "am", "are", "be"], correct: 2 },
      { q: "It ____ a beautiful day.", options: ["am", "is", "are", "do"], correct: 1 },
      { q: "____ I late for the meeting?", options: ["Is", "Are", "Am", "Was"], correct: 2 },
      { q: "My parents ____ very kind.", options: ["is", "am", "are", "be"], correct: 2 },
      { q: "This book ____ interesting.", options: ["am", "are", "is", "be"], correct: 2 },
    ],
  },

  pronouns: {
    title: "Personal Pronouns (I, You, He...)",
    questions: [
      { q: "____ is my brother. He is a student.", options: ["She", "He", "It", "They"], correct: 1 },
      { q: "Look at Anna. ____ is very tall.", options: ["He", "It", "She", "They"], correct: 2 },
      { q: "____ am a teacher.", options: ["He", "I", "You", "It"], correct: 1 },
      { q: "Peter and I are friends. ____ study together.", options: ["They", "We", "You", "He"], correct: 1 },
      { q: "This is a car. ____ is red.", options: ["He", "She", "It", "They"], correct: 2 },
      { q: "My friends are nice. ____ help me a lot.", options: ["It", "She", "He", "They"], correct: 3 },
      { q: "____ are ready for the test, aren't you?", options: ["You", "He", "It", "I"], correct: 0 },
      { q: "Where is Tom? ____ is in the kitchen.", options: ["She", "He", "It", "We"], correct: 1 },
      { q: "I have a cat. ____ name is Max.", options: ["He", "His", "Its", "It"], correct: 2 },
      { q: "Sara and Mike are married. ____ live in London.", options: ["He", "She", "They", "It"], correct: 2 },
    ],
  },

  articles: {
    title: "Articles (a / an / the)",
    questions: [
      { q: "I saw ____ elephant at the zoo.", options: ["a", "an", "the", "-"], correct: 1 },
      { q: "There is ____ book on the table.", options: ["a", "an", "the", "-"], correct: 0 },
      { q: "____ sun rises in the east.", options: ["A", "An", "The", "-"], correct: 2 },
      { q: "He is ____ honest man.", options: ["a", "an", "the", "-"], correct: 1 },
      { q: "Can you pass me ____ apple, please?", options: ["a", "an", "the", "-"], correct: 1 },
      { q: "My father is ____ engineer.", options: ["a", "an", "the", "-"], correct: 1 },
      { q: "We visited ____ museum yesterday.", options: ["a", "an", "the", "-"], correct: 0 },
      { q: "____ moon is bright tonight.", options: ["A", "An", "The", "-"], correct: 2 },
      { q: "She bought ____ umbrella because it was raining.", options: ["a", "an", "the", "-"], correct: 1 },
      { q: "I need ____ pen to write this letter.", options: ["a", "an", "the", "-"], correct: 0 },
    ],
  },

  plural_nouns: {
    title: "Plural Nouns (Ko'plik shakli)",
    questions: [
      { q: "I have two ____. (book)", options: ["book", "books", "bookes", "bookies"], correct: 1 },
      { q: "There are many ____ in the garden. (flower)", options: ["flower", "flowers", "flowerss", "flowery"], correct: 1 },
      { q: "The ____ are playing in the park. (child)", options: ["childs", "childes", "children", "child"], correct: 2 },
      { q: "She has three ____. (box)", options: ["boxs", "boxes", "box", "boxies"], correct: 1 },
      { q: "I saw two ____ on the farm. (sheep)", options: ["sheeps", "sheep", "sheepes", "sheepies"], correct: 1 },
      { q: "There are five ____ in my family. (person)", options: ["persons", "people", "peoples", "person"], correct: 1 },
      { q: "He has two ____. (foot)", options: ["foots", "feets", "feet", "footes"], correct: 2 },
      { q: "The ____ are swimming in the lake. (fish)", options: ["fishes", "fish", "fishs", "fishies"], correct: 1 },
      { q: "My sister has many ____. (dress)", options: ["dress", "dresss", "dresses", "dressies"], correct: 2 },
      { q: "There are two ____ in the classroom. (window)", options: ["window", "windowes", "windowies", "windows"], correct: 3 },
    ],
  },

  demonstratives: {
    title: "This / That / These / Those",
    questions: [
      { q: "____ is my bag. (it is next to me)", options: ["This", "That", "These", "Those"], correct: 0 },
      { q: "____ are my shoes over there, far from me.", options: ["This", "That", "These", "Those"], correct: 3 },
      { q: "Look at ____ car right here next to us.", options: ["this", "that", "these", "those"], correct: 0 },
      { q: "Can you see ____ mountains far in the distance?", options: ["this", "that", "these", "those"], correct: 3 },
      { q: "____ is my friend, Alex. (introducing, he is near you)", options: ["This", "That", "These", "Those"], correct: 0 },
      { q: "____ apples here in my hand are fresh.", options: ["This", "That", "These", "Those"], correct: 2 },
      { q: "____ house over there belongs to my uncle.", options: ["This", "That", "These", "Those"], correct: 1 },
      { q: "I like ____ pen you are holding right now (near you).", options: ["this", "that", "these", "those"], correct: 1 },
      { q: "____ flowers here on my desk smell wonderful.", options: ["This", "That", "These", "Those"], correct: 2 },
      { q: "Whose is ____ bicycle standing next to the door?", options: ["this", "that", "these", "those"], correct: 0 },
    ],
  },

  possessives: {
    title: "Possessive Adjectives (my, your, his...)",
    questions: [
      { q: "This is ____ book. (I)", options: ["me", "my", "mine", "I"], correct: 1 },
      { q: "Is this ____ car? (you)", options: ["you", "your", "yours", "yourself"], correct: 1 },
      { q: "She loves ____ family. (she)", options: ["her", "hers", "she", "herself"], correct: 0 },
      { q: "The dog wags ____ tail. (it)", options: ["it", "its", "it's", "itself"], correct: 1 },
      { q: "We did ____ homework. (we)", options: ["us", "our", "ours", "we"], correct: 1 },
      { q: "They lost ____ keys. (they)", options: ["them", "their", "theirs", "they"], correct: 1 },
      { q: "He forgot ____ umbrella. (he)", options: ["him", "his", "he", "himself"], correct: 1 },
      { q: "____ names are John and Mary. (we)", options: ["We", "Us", "Our", "Ours"], correct: 2 },
      { q: "Is that ____ pen? (you)", options: ["you", "your", "yours", "yourself"], correct: 1 },
      { q: "The cat is licking ____ paw. (it)", options: ["it's", "its", "it", "itself"], correct: 1 },
    ],
  },

  there_is_are: {
    title: "There is / There are",
    questions: [
      { q: "____ a book on the table.", options: ["There is", "There are", "There am", "It is"], correct: 0 },
      { q: "____ many students in the class.", options: ["There is", "There are", "There am", "It are"], correct: 1 },
      { q: "____ an apple in the basket.", options: ["There is", "There are", "There am", "It is"], correct: 0 },
      { q: "____ two cars in the garage.", options: ["There is", "There are", "There am", "It are"], correct: 1 },
      { q: "____ some milk in the fridge.", options: ["There is", "There are", "There am", "It is"], correct: 0 },
      { q: "____ any questions?", options: ["Is there", "Are there", "Am there", "Do there"], correct: 1 },
      { q: "____ a cat under the bed.", options: ["There is", "There are", "There am", "It is"], correct: 0 },
      { q: "____ three windows in this room.", options: ["There is", "There are", "There am", "It are"], correct: 1 },
      { q: "____ not much time left.", options: ["There is", "There are", "There am", "It is"], correct: 0 },
      { q: "____ a lot of people at the party.", options: ["There is", "There are", "There am", "It are"], correct: 1 },
    ],
  },

  present_simple: {
    title: "Present Simple Tense",
    questions: [
      { q: "She ____ to school every day. (go)", options: ["go", "goes", "going", "gone"], correct: 1 },
      { q: "I ____ coffee in the morning. (drink)", options: ["drink", "drinks", "drinking", "drunk"], correct: 0 },
      { q: "He does ____ like fish.", options: ["not", "no", "isn't", "don't"], correct: 0 },
      { q: "____ you speak English?", options: ["Are", "Is", "Do", "Does"], correct: 2 },
      { q: "My mother ____ dinner every evening. (cook)", options: ["cook", "cooks", "cooking", "cooked"], correct: 1 },
      { q: "They ____ football on weekends. (play)", options: ["play", "plays", "playing", "played"], correct: 0 },
      { q: "____ it rain a lot here?", options: ["Do", "Does", "Is", "Are"], correct: 1 },
      { q: "We ____ not watch TV at night.", options: ["do", "does", "is", "are"], correct: 0 },
      { q: "The sun ____ in the east. (rise)", options: ["rise", "rises", "rising", "risen"], correct: 1 },
      { q: "____ your sister live in London?", options: ["Do", "Does", "Is", "Are"], correct: 1 },
    ],
  },

  prepositions: {
    title: "Prepositions of Place (in, on, under...)",
    questions: [
      { q: "The book is ____ the table.", options: ["in", "on", "under", "between"], correct: 1 },
      { q: "The cat is ____ the box.", options: ["in", "on", "next to", "under"], correct: 0 },
      { q: "The keys are ____ the bag.", options: ["on", "in", "under", "between"], correct: 1 },
      { q: "She is standing ____ the door.", options: ["under", "in", "next to", "on"], correct: 2 },
      { q: "The picture is ____ the wall.", options: ["on", "in", "under", "next to"], correct: 0 },
      { q: "The ball is ____ the chair.", options: ["on", "in", "under", "between"], correct: 2 },
      { q: "There is a lamp ____ the desk.", options: ["under", "on", "between", "next to"], correct: 1 },
      { q: "The school is ____ the bank and the park.", options: ["in", "on", "under", "between"], correct: 3 },
      { q: "He is sitting ____ his friend.", options: ["under", "in", "next to", "on"], correct: 2 },
      { q: "The shoes are ____ the bed.", options: ["on", "in", "under", "between"], correct: 2 },
    ],
  },

  question_words: {
    title: "Question Words (what, where, when...)",
    questions: [
      { q: "____ is your name?", options: ["Who", "What", "Where", "When"], correct: 1 },
      { q: "____ are you from?", options: ["What", "Who", "Where", "Why"], correct: 2 },
      { q: "____ is your birthday?", options: ["Who", "What", "Where", "When"], correct: 3 },
      { q: "____ is that man over there?", options: ["Who", "What", "Where", "When"], correct: 0 },
      { q: "____ are you late for class?", options: ["What", "Why", "Who", "When"], correct: 1 },
      { q: "____ old are you?", options: ["What", "Who", "How", "Where"], correct: 2 },
      { q: "____ books do you have?", options: ["How much", "How many", "How old", "What"], correct: 1 },
      { q: "____ money do you need?", options: ["How many", "How much", "How old", "What"], correct: 1 },
      { q: "____ is your favorite color?", options: ["Who", "What", "Where", "Why"], correct: 1 },
      { q: "____ do you live?", options: ["What", "Who", "Where", "Why"], correct: 2 },
    ],
  },
};

// ============================================================
//  GRAMMATIKA NAZARIY QISM (0 dan tushuntirilgan)
// ============================================================

const grammarDatabase = [
  {
    key: "to_be",
    title: "To Be fe'li (am / is / are)",
    icon: "🔑",
    content: `
      <p><b>To be</b> — ingliz tilidagi eng muhim va eng ko'p ishlatiladigan fe'l. U "bo'lmoq" degan ma'noni bildiradi va o'zbek tilida ko'pincha alohida tarjima qilinmaydi (masalan: "I am a student" — "Men talabaman").</p>
      <p class="font-bold mt-4 mb-2">To be fe'lining 3 shakli bor:</p>
      <table class="w-full text-sm border border-slate-200 rounded-lg overflow-hidden mb-4">
        <thead class="bg-slate-100"><tr><th class="p-2 text-left">Olmosh</th><th class="p-2 text-left">To be</th><th class="p-2 text-left">Misol</th></tr></thead>
        <tbody>
          <tr class="border-t"><td class="p-2 font-bold">I</td><td class="p-2 text-blue-600 font-bold">am</td><td class="p-2">I am Aziz.</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">He / She / It</td><td class="p-2 text-blue-600 font-bold">is</td><td class="p-2">She is a teacher.</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">You / We / They</td><td class="p-2 text-blue-600 font-bold">are</td><td class="p-2">They are students.</td></tr>
        </tbody>
      </table>
      <p class="font-bold mt-4 mb-2">3 xil gap turi:</p>
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Darak gap (+):</b> I am happy. / She is busy.</li>
        <li><b>Inkor gap (−):</b> I am not tired. / They are not (aren't) here.</li>
        <li><b>Savol gap (?):</b> Are you ready? / Is he at home?</li>
      </ul>
      <p class="mt-4">Qisqartma (contraction) shakllar ham juda ko'p ishlatiladi: <b>I'm, you're, he's, she's, it's, we're, they're</b>, inkorda esa <b>isn't, aren't</b>.</p>
    `,
  },
  {
    key: "pronouns",
    title: "Olmoshlar (I, you, he, she, it...)",
    icon: "🧑",
    content: `
      <p>Shaxs olmoshlari (personal pronouns) — otlar o'rniga ishlatiladigan so'zlar. Gapni takrorlamaslik uchun kerak.</p>
      <table class="w-full text-sm border border-slate-200 rounded-lg overflow-hidden my-4">
        <thead class="bg-slate-100"><tr><th class="p-2 text-left">Ingliz</th><th class="p-2 text-left">O'zbek</th></tr></thead>
        <tbody>
          <tr class="border-t"><td class="p-2 font-bold">I</td><td class="p-2">men</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">You</td><td class="p-2">sen / siz</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">He</td><td class="p-2">u (erkak)</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">She</td><td class="p-2">u (ayol)</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">It</td><td class="p-2">u (narsa/hayvon)</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">We</td><td class="p-2">biz</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">They</td><td class="p-2">ular</td></tr>
        </tbody>
      </table>
      <p>Masalan: "Anna is my friend. <b>She</b> is kind." — Anna ismini takrorlamaslik uchun "she" ishlatildi.</p>
    `,
  },
  {
    key: "articles",
    title: "Artikllar (a / an / the)",
    icon: "📎",
    content: `
      <p>Artikl — otdan oldin keladigan kichik so'z bo'lib, o'zbek tilida mavjud emas, shuning uchun ko'pincha xato qilinadi.</p>
      <ul class="list-disc pl-5 space-y-2 mt-3">
        <li><b>a</b> — undosh tovush bilan boshlanadigan so'zdan oldin: <i>a book, a car, a university</i></li>
        <li><b>an</b> — unli tovush (a, e, i, o, u) bilan boshlanadigan so'zdan oldin: <i>an apple, an hour, an egg</i></li>
        <li><b>the</b> — aniq, ma'lum bir narsa haqida gapirilganda: <i>The sun is hot. The book on the table is mine.</i></li>
      </ul>
      <p class="mt-4"><b>Muhim:</b> "a/an" — noaniq artikl (biror-bir, umumiy), "the" — aniq artikl (o'sha, ma'lum). Umumiy tushunchalarda (masalan, "Water is important") artikl ishlatilmaydi.</p>
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
          <tr class="border-t"><td class="p-2">-s, -x, -ch, -sh, -o bilan tugasa <b>-es</b></td><td class="p-2">box → boxes, watch → watches</td></tr>
          <tr class="border-t"><td class="p-2">-y undosh + y bilan tugasa: y → ies</td><td class="p-2">city → cities, baby → babies</td></tr>
          <tr class="border-t"><td class="p-2">Noto'g'ri (irregular) shakllar</td><td class="p-2">man → men, child → children, foot → feet, person → people</td></tr>
        </tbody>
      </table>
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
    `,
  },
  {
    key: "possessives",
    title: "Egalik olmoshlari (my, your, his...)",
    icon: "🏷️",
    content: `
      <p>Egalik sifatlari (possessive adjectives) — kimningdir narsasi ekanligini bildiradi va har doim otdan oldin keladi.</p>
      <table class="w-full text-sm border border-slate-200 rounded-lg overflow-hidden my-4">
        <thead class="bg-slate-100"><tr><th class="p-2 text-left">Olmosh</th><th class="p-2 text-left">Egalik shakli</th></tr></thead>
        <tbody>
          <tr class="border-t"><td class="p-2">I</td><td class="p-2 font-bold text-blue-600">my</td></tr>
          <tr class="border-t"><td class="p-2">you</td><td class="p-2 font-bold text-blue-600">your</td></tr>
          <tr class="border-t"><td class="p-2">he</td><td class="p-2 font-bold text-blue-600">his</td></tr>
          <tr class="border-t"><td class="p-2">she</td><td class="p-2 font-bold text-blue-600">her</td></tr>
          <tr class="border-t"><td class="p-2">it</td><td class="p-2 font-bold text-blue-600">its</td></tr>
          <tr class="border-t"><td class="p-2">we</td><td class="p-2 font-bold text-blue-600">our</td></tr>
          <tr class="border-t"><td class="p-2">they</td><td class="p-2 font-bold text-blue-600">their</td></tr>
        </tbody>
      </table>
      <p>Misol: <i>This is my book. Is that your bag? She loves her family.</i></p>
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
      </ul>
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
        <thead class="bg-slate-100"><tr><th class="p-2 text-left">Gap turi</th><th class="p-2 text-left">Misol</th></tr></thead>
        <tbody>
          <tr class="border-t"><td class="p-2">Darak (+)</td><td class="p-2">I play football. She plays football.</td></tr>
          <tr class="border-t"><td class="p-2">Inkor (−)</td><td class="p-2">I don't play. She doesn't play.</td></tr>
          <tr class="border-t"><td class="p-2">Savol (?)</td><td class="p-2">Do you play? Does she play?</td></tr>
        </tbody>
      </table>
      <p><b>Do</b> — I/you/we/they bilan, <b>Does</b> — he/she/it bilan ishlatiladi (does bilan ishlatilganda asosiy fe'lga -s qo'shilmaydi: does she play, emas "does she plays").</p>
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
          <tr class="border-t"><td class="p-2 font-bold">How many</td><td class="p-2">nechta (sanaladigan)</td><td class="p-2">How many books?</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">How much</td><td class="p-2">qancha (sanalmaydigan)</td><td class="p-2">How much money?</td></tr>
        </tbody>
      </table>
    `,
  },
];

// ============================================================
//  LUG'AT (VOCABULARY) - Yodlash uchun so'zlar
// ============================================================

const vocabDatabase = [
  {
    key: "family",
    title: "Oila a'zolari",
    icon: "👨‍👩‍👧‍👦",
    words: [
      { en: "mother", uz: "ona" }, { en: "father", uz: "ota" },
      { en: "sister", uz: "opa/singil" }, { en: "brother", uz: "aka/uka" },
      { en: "grandmother", uz: "buvi" }, { en: "grandfather", uz: "bobo" },
      { en: "son", uz: "o'g'il" }, { en: "daughter", uz: "qiz" },
      { en: "aunt", uz: "xola/amma" }, { en: "uncle", uz: "tog'a/amaki" },
    ],
  },
  {
    key: "colors",
    title: "Ranglar",
    icon: "🎨",
    words: [
      { en: "red", uz: "qizil" }, { en: "blue", uz: "ko'k" },
      { en: "green", uz: "yashil" }, { en: "yellow", uz: "sariq" },
      { en: "black", uz: "qora" }, { en: "white", uz: "oq" },
      { en: "orange", uz: "to'q sariq" }, { en: "pink", uz: "pushti" },
      { en: "purple", uz: "binafsha" }, { en: "brown", uz: "jigarrang" },
    ],
  },
  {
    key: "numbers",
    title: "Sonlar (1-20)",
    icon: "🔢",
    words: [
      { en: "one", uz: "bir" }, { en: "two", uz: "ikki" }, { en: "three", uz: "uch" },
      { en: "four", uz: "to'rt" }, { en: "five", uz: "besh" }, { en: "six", uz: "olti" },
      { en: "seven", uz: "yetti" }, { en: "eight", uz: "sakkiz" }, { en: "nine", uz: "to'qqiz" },
      { en: "ten", uz: "o'n" }, { en: "eleven", uz: "o'n bir" }, { en: "twelve", uz: "o'n ikki" },
      { en: "twenty", uz: "yigirma" },
    ],
  },
  {
    key: "days",
    title: "Hafta kunlari",
    icon: "📅",
    words: [
      { en: "Monday", uz: "dushanba" }, { en: "Tuesday", uz: "seshanba" },
      { en: "Wednesday", uz: "chorshanba" }, { en: "Thursday", uz: "payshanba" },
      { en: "Friday", uz: "juma" }, { en: "Saturday", uz: "shanba" },
      { en: "Sunday", uz: "yakshanba" },
    ],
  },
  {
    key: "food",
    title: "Ovqatlar",
    icon: "🍽️",
    words: [
      { en: "bread", uz: "non" }, { en: "water", uz: "suv" },
      { en: "milk", uz: "sut" }, { en: "apple", uz: "olma" },
      { en: "rice", uz: "guruch" }, { en: "meat", uz: "go'sht" },
      { en: "egg", uz: "tuxum" }, { en: "tea", uz: "choy" },
      { en: "coffee", uz: "qahva" }, { en: "cheese", uz: "pishloq" },
    ],
  },
  {
    key: "animals",
    title: "Hayvonlar",
    icon: "🐾",
    words: [
      { en: "dog", uz: "it" }, { en: "cat", uz: "mushuk" },
      { en: "bird", uz: "qush" }, { en: "fish", uz: "baliq" },
      { en: "horse", uz: "ot" }, { en: "cow", uz: "sigir" },
      { en: "lion", uz: "sher" }, { en: "elephant", uz: "fil" },
      { en: "rabbit", uz: "quyon" }, { en: "mouse", uz: "sichqon" },
    ],
  },
  {
    key: "verbs",
    title: "Fe'llar",
    icon: "🏃",
    words: [
      { en: "go", uz: "bormoq" }, { en: "eat", uz: "yemoq" },
      { en: "drink", uz: "ichmoq" }, { en: "sleep", uz: "uxlamoq" },
      { en: "read", uz: "o'qimoq" }, { en: "write", uz: "yozmoq" },
      { en: "run", uz: "yugurmoq" }, { en: "play", uz: "o'ynamoq" },
      { en: "work", uz: "ishlamoq" }, { en: "study", uz: "o'qimoq (dars)" },
    ],
  },
  {
    key: "adjectives",
    title: "Sifatlar",
    icon: "✨",
    words: [
      { en: "big", uz: "katta" }, { en: "small", uz: "kichik" },
      { en: "happy", uz: "baxtli" }, { en: "sad", uz: "xafa" },
      { en: "hot", uz: "issiq" }, { en: "cold", uz: "sovuq" },
      { en: "fast", uz: "tez" }, { en: "slow", uz: "sekin" },
      { en: "new", uz: "yangi" }, { en: "old", uz: "eski/keksa" },
    ],
  },
];
