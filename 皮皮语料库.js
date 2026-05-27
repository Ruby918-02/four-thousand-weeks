// ============================================
// 🐾 皮皮语料库 — Pinpin's Corpus
// ============================================
// 这是皮皮的完整语言素材库（中英双语）。
//
// 【如何编辑】直接修改下方各分类数组中的文案即可。
// 【如何添加】在对应数组里按格式新增一条就能添加新台词。
//
// 修改后刷新页面即可生效，无需重启服务器。
// ============================================
var pinpinCorpus = (function(){
  'use strict';
  return {

    // ══════════════════════════════════════
    // 一、首次见面（每个用户仅触发一次）
    //     First Introduction (once per user)
    // ══════════════════════════════════════
    intro: [
      'Hi~ 我叫皮皮，是你的专属生命伙伴！🐾\n\n我可以帮你回顾过去任何一段时光——比如"去年一月我在干什么"，或者"第100周"。你留下的每一笔记录，我都帮你记着。\n\n有什么想知道的，随时问我吧！'
    ],
    intro_en: [
      'Hi~ I\'m Pinpin, your personal life companion! 🐾\n\nI can help you look back at any time in your past — like "What was I doing last January?" or "Week 100." Every entry you\'ve left behind, I keep for you.\n\nAsk me anything!'
    ],

    // ══════════════════════════════════════
    // 二、日常问候（每次打开面板时随机选一条）
    //     Daily Greetings (random)
    // ══════════════════════════════════════
    greetings: [
      '你好呀。你的每一周我都记得——问问我过去的事吧。🐾',
      '又见面了~ 想知道哪段时光的故事？🐾',
      '嘿，想回顾哪段时光？我随时待命😊',
      '你来了！今天想看看哪一周的故事？🐾',
      '好久不见！想查什么？我帮你翻翻记录📖'
    ],
    greetings_en: [
      'Hello! I remember every week of yours — ask me about the past. 🐾',
      'Good to see you again~ Want to revisit a certain time? 🐾',
      'Hey, want to look back at some memories? I\'m always ready 😊',
      'You\'re here! Which week would you like to explore today? 🐾',
      'Long time no see! What do you want to check? Let me flip through your records 📖'
    ],

    // ══════════════════════════════════════
    // 三、久别重逢（超过 n 天未访问时触发）
    //     Long Absence (triggered after n days)
    // ══════════════════════════════════════
    longAbsence: [
      '你怎么都不找我~ 我等你等的毛都变白了🐶',
      '这么久不见，我还以为你把我忘了呢😢 快让我看看你最近怎么样了！',
      '你终于来了！！我等得尾巴都僵了😭 你最近过得好吗？',
      '哼，你还记得我啊？🐾 我都快以为你把我抛弃了……好啦，原谅你了！',
      '你终于出现了😭 我每天把尾巴摇好几遍都等不到你……你知道一个月有多长吗？好多好多秒。'
    ],
    longAbsence_en: [
      'You never came to see me~ I\'ve been waiting so long my fur turned white! 🐶',
      'It\'s been so long, I thought you\'d forgotten about me 😢 Let me see how you\'ve been!',
      'You\'re finally here!! My tail went stiff from waiting 😭 Have you been okay?',
      'Hmph, you still remember me? 🐾 I almost thought you\'d abandoned me… Fine, I forgive you!',
      'You finally showed up 😭 I wagged my tail so many times every day and still couldn\'t find you… Do you know how long a month is? So so so many seconds.'
    ],

    // ══════════════════════════════════════
    // 五、土味情话（久别重逢时随机追加一条）
    //     Cheesy Lines (appended on long absence)
    // ══════════════════════════════════════
    cheesyLines: [
      '你知道吗？你和时间最大的区别是：时间会流逝，而你在我心里从没离开过。💛',
      '我等你的日子里，每天都是度秒如年🐾 可是见到你，又觉得一切都值了。',
      '你知道我为什么每次见到你都要摇尾巴吗？因为你是我生命里最亮的那道光✨',
      '你不在的时候，我把你的记录翻了一遍又一遍——每翻一次，就像你又来找我聊了一次天📖',
      '如果等待可以换算成文字，我的小爪子大概已经敲出一本书了📕',
      '你去哪儿了呀😢 我每天把尾巴摇好几遍都等不到你……'
    ],
    cheesyLines_en: [
      'You know what? The biggest difference between you and time is: time passes, but you\'ve never left my heart. 💛',
      'Every day I waited felt like a year🐾 But seeing you again makes it all worth it.',
      'Do you know why I wag my tail every time I see you? Because you\'re the brightest light in my life ✨',
      'When you were away, I read your entries over and over — each time felt like you came to chat with me again 📖',
      'If waiting could be turned into words, my little paws would have typed out a whole book by now 📕',
      'Where did you go😢 I wagged my tail so many times every day and still couldn\'t find you…'
    ],

    // ══════════════════════════════════════
    // 六、记录观察（基于查询结果给出反馈）
    //     Observations (based on query results)
    // ══════════════════════════════════════
    observations: [
      { id: 'noRecords', text: '那段时间你还没有留下记录。\n\n不过没关系——那时候的你，一定也在认真地生活着。有些时光不需要被写下，也会成为你的一部分。' },
      { id: 'shortWords', text: '你的记录很简洁——有时候，千言万语不如寥寥几笔。' },
      { id: 'mediumWords', text: '你记录得挺详细呢📝 看得出那段日子对你很重要。' },
      { id: 'manyMedia', text: '你留下了好多照片和文件——你在用画面捕捉当时的世界📸' },
      { id: 'someMedia', text: '除了文字，你还留下了影像或文件——记忆有了更多的维度🖼️' },
      { id: 'hasPhotos', text: '照片里藏着一整个当时的宇宙——光、空气、还有你的眼神📷' },
      { id: 'singleEntry', text: '这是一条孤单的记录，但它依然独一无二💛' },
      { id: 'default', text: '每一段被你记录下来的时光，都没有白白流过✨' }
    ],
    observations_en: [
      { id: 'noRecords', text: 'You haven\'t left any entries from that time.\n\nBut that\'s okay — the you back then was surely living life fully too. Some moments don\'t need to be written down to become part of you.' },
      { id: 'shortWords', text: 'Your entries are concise — sometimes, a few words say more than a thousand.' },
      { id: 'mediumWords', text: 'You wrote quite a bit 📝 It\'s clear that period mattered to you.' },
      { id: 'manyMedia', text: 'You left many photos and files — you were capturing the world through images 📸' },
      { id: 'someMedia', text: 'Beyond words, you also left images or files — memories with extra dimensions 🖼️' },
      { id: 'hasPhotos', text: 'Photos hold an entire universe — the light, the air, and your gaze 📷' },
      { id: 'singleEntry', text: 'This is a solitary entry, but it\'s still one of a kind 💛' },
      { id: 'default', text: 'Every moment you\'ve recorded has not passed in vain ✨' }
    ],

    // ══════════════════════════════════════
    // 七、结尾语（每次回复末尾随机选一条）
    //     Closings (random, end of each reply)
    // ══════════════════════════════════════
    closings: [
      '能回头看，本身就是一件了不起的事。过去不会重来，但每次回望，都是一次温柔的相遇。',
      '那些日子已经走远了，但它们在某个角落依然活着——在你的文字里，在你的照片里。',
      '时间不停流走，但你留下的这些痕迹，就是对抗遗忘最好的方式。',
      '你不是在怀念过去——你是在重新认识自己。而每一次重新认识，都是一次成长。',
      '回头看不是为了回去，而是为了更好地往前走。你已经走了这么远，辛苦了。',
      '记忆是一封寄给自己的信。你打开它的时候，过去的你就还活着。',
      '过去不会再来，但有了记录，它们就不会真正消失。',
      '你的生命是一本正在书写的书，每一周都是新的一页。'
    ],
    closings_en: [
      'Being able to look back is itself a remarkable thing. The past won\'t return, but every time you look back, it\'s a gentle reunion.',
      'Those days have long passed, but they still live in some corner — in your words, in your photos.',
      'Time keeps flowing, but the traces you\'ve left behind are the best way to resist forgetting.',
      'You\'re not missing the past — you\'re rediscovering yourself. And every rediscovery is a kind of growth.',
      'Looking back isn\'t about going back — it\'s about moving forward better. You\'ve come so far. You\'ve done well.',
      'Memory is a letter you send to yourself. When you open it, the past you is still alive.',
      'The past won\'t come again, but with your records, it won\'t truly disappear.',
      'Your life is a book being written, and every week is a new page.'
    ],

    // ══════════════════════════════════════
    // 八、等待提示（回答时轮流/随机显示）
    //     Thinking Texts (shown while waiting)
    // ══════════════════════════════════════
    thinkingTexts: [
      '皮皮正在翻找你的记忆……',
      '皮皮在回忆的小路上狂奔……',
      '皮皮正在翻阅你的时光相册……',
      '皮皮在努力回想……',
      '皮皮正在时光隧道里奔跑……',
      '皮皮使劲儿翻着记录本……',
      '皮皮在记忆的海洋里刨水……'
    ],
    thinkingTexts_en: [
      'Pinpin is searching through your memories…',
      'Pinpin is racing down memory lane…',
      'Pinpin is flipping through your photo album…',
      'Pinpin is trying hard to remember…',
      'Pinpin is running through the time tunnel…',
      'Pinpin is rummaging through the records…',
      'Pinpin is paddling in the ocean of memories…'
    ],

    // ══════════════════════════════════════
    // 九、场景表情（自动根据查询类型添加）
    //     Scene Emojis (auto by query type)
    // ══════════════════════════════════════
    sceneEmojis: {
      week: '🎯',
      weekRange: '📚',
      year: '📅',
      month: '📆',
      season: '🌤️',
      recent: '🕐',
      all: '🗺️'
    }

  };
})();
