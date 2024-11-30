export default {
  common: {
    play: '播放',
    songs: '首歌',
  },
  nav: {
    home: '首页',
    explore: '发现',
    library: '音乐库',
    localMusic: '本地音乐',
    search: '搜索',
    github: 'GitHub 仓库',
  },
  home: {
    recommendPlaylist: '推荐歌单',
    recommendArtist: '推荐艺人',
    newAlbum: '新专速递',
    seeMore: '查看全部',
    charts: '排行榜',
  },
  library: {
    sLibrary: '的音乐库',
    playCurrentTrack: '播放此歌曲',
    likedSongs: '我喜欢的音乐',
    sLikedSongs: '喜欢的音乐',
    playlists: '歌单',
    albums: '专辑',
    artists: '艺人',
    mvs: 'MV',
    cloudDisk: '云盘',
    newPlayList: '新建歌单',
    uploadSongs: '上传歌曲',
    playHistory: {
      title: '听歌排行',
      week: '最近一周',
      all: '所有时间',
    },
    userProfileMenu: {
      settings: '设置',
      logout: '登出',
    },
  },
  localMusic: {
    sLocalMusic: '的本地音乐',
    latedAdd: '最近添加的音乐',
    playlist: '离线歌单',
    albums: '专辑',
    artists: '艺人',
    changeScanningPath: '更改扫描路径',
    search: '搜索本地音乐',
    description: `由于歌单简介的编辑功能并没有开发,\n因此这里是设置了一段本地歌单的默认简介,\n请待到相关功能完成后再进行设置吧~`,
    positionTrack: '定位歌曲',
    scrollToTop: '返回顶部',
  },
  explore: {
    explore: '发现',
    loadMore: '加载更多',
  },
  artist: {
    latestRelease: '最新发布',
    latestMV: '最新 MV',
    popularSongs: '热门歌曲',
    showMore: '显示更多',
    showLess: '收起',
    EPsSingles: 'EP 和单曲',
    albums: '专辑',
    withAlbums: '张专辑',
    artist: '艺人',
    videos: '个 MV',
    following: '正在关注',
    follow: '关注',
    similarArtists: '相似艺人',
    artistDesc: '艺术家介绍',
  },
  album: {
    released: '发行于',
    albumDesc: '专辑介绍',
  },
  playlist: {
    playlist: '歌单',
    updatedAt: '最后更新于',
    search: '搜索歌单音乐',
  },
  login: {
    accessToAll: '可访问全部数据',
    loginText: '登录网易云账号',
    search: '搜索网易云账号',
    readonly: '只能读取账号公开数据',
    usernameLogin: '用户名登录',
    searchHolder: '请输入你的网易云用户名',
    enterTip: '按 Enter 搜索',
    choose: '在列表中选中你的账号',
    confirm: '确认',
    countryCode: '国际区号',
    phone: '手机号',
    email: '邮箱',
    password: '密码',
    login: '登录',
    loginWithEmail: '邮箱登录',
    loginWithPhone: '手机号登录',
    notice: `YesPlayMusic 承诺不会保存你的任何账号信息到云端。<br />
      你的密码会在本地进行 MD5 加密后再传输到网易云 API。<br />
      YesPlayMusic 并非网易云官方网站，输入账号信息前请慎重考虑。 你也可以前往
      <a href="https://github.com/stark81/my_yesplaymusic/"
        >YesPlayMusic 的 GitHub 源代码仓库</a
      >
      自行构建并使用自托管的网易云 API。`,
    noticeElectron: `你的密码会在本地进行 MD5 加密后再传输到网易云 API。<br />
      YesPlayMusic 不会传输你的账号数据到任何非网易云音乐官方的服务器。<br />`,
  },
  mv: {
    moreVideo: '更多视频',
  },
  next: {
    nowPlaying: '正在播放',
    nextUp: '即将播放',
  },
  player: {
    like: '喜欢',
    unlike: '取消喜欢',
    previous: '上一首',
    next: '下一首',
    repeat: '循环播放',
    repeatTrack: '单曲循环',
    shuffle: '随机播放',
    reversed: '倒序播放',
    play: '播放',
    pause: '暂停',
    mute: '静音',
    nextUp: '播放列表',
    osdLyrics: '桌面歌词',
    noAllowCauseLocal: '本地歌曲，无法操作',
  },
  modal: {
    close: '关闭',
  },
  search: {
    artist: '艺人',
    album: '专辑',
    song: '歌曲',
    mv: '视频',
    playlist: '歌单',
    noResult: '暂无结果',
    searchFor: '搜索',
  },
  settings: {
    settings: '设置',
    logout: '登出',
    language: '语言',
    musicQuality: {
      text: '音质选择',
      low: '普通',
      medium: '较高',
      high: '极高',
      lossless: '无损',
    },
    cacheLimit: {
      text: '歌曲缓存上限',
      none: '无限制',
    },
    lyricFontSize: {
      text: '歌词字体大小',
      small: '小',
      medium: '中',
      large: '大（默认）',
      xlarge: '超大',
    },
    deviceSelector: '音频输出设备',
    permissionRequired: '需要麦克风权限',
    appearance: {
      text: '外观',
      auto: '自动',
      light: '浅色',
      dark: '深色',
    },
    automaticallyCacheSongs: '自动缓存歌曲',
    clearSongsCache: '清除歌曲缓存',
    cacheCount: '已缓存 {song} 首 ({size})',
    showLyricsTranslation: {
      text: '显示歌词翻译/音译',
      never: '从不',
      tlyric: '翻译',
      rlyric: '音译',
    },
    showTray: '显示状态栏图标',
    showControl: '显示控制按钮',
    showStatusBarLyric: '显示状态栏歌词',
    showStatusMenu: {
      title: '启用图标菜单',
      desc1: '开启此项后，当状态栏控制按钮和状态栏歌词',
      desc2: '同时关闭时，将为托盘图标添加菜单栏',
    },
    minimizeToTray: '最小化到托盘',
    showPlaylistsByAppleMusic: '首页显示来自 Apple Music 的歌单',
    enableDiscordRichPresence: '启用 Discord Rich Presence',
    enableGlobalShortcut: '启用全局快捷键',
    showLibraryDefault: '启动后显示音乐库',
    showTimeOrID: {
      text: '歌曲列表歌曲信息显示选项',
      time: '歌曲时长',
      ID: '歌曲ID',
    },
    subTitleDefault: '副标题使用别名',
    enableReversedMode: '启用倒序播放功能 (实验性功能)',
    enableCustomTitlebar: '启用自定义标题栏 (重启后生效)',
    lyricsBackground: {
      text: '显示歌词背景',
      off: '关闭',
      on: '打开',
      dynamic: '动态（GPU 占用较高）',
    },
    showLyricsTime: '显示当前时间',
    closeAppOption: {
      text: '关闭主面板时...',
      ask: '询问',
      exit: '退出',
      minimizeToTray: '最小化到托盘',
    },
    unm: {
      enable: '启用',
      audioSource: {
        title: '备选音源',
      },
      enableFlac: {
        title: '启用 FLAC',
        desc: '启用后需要清除歌曲缓存才能生效',
      },
      searchMode: {
        title: '音源搜索模式',
        fast: '速度优先',
        order: '顺序优先',
      },
      cookie: {
        joox: 'Joox 引擎的 Cookie',
        qq: 'QQ 引擎的 Cookie',
        desc1: '设置说明请参见此处',
        desc2: '，留空则不进行相关设置',
      },
      ytdl: 'YtDl 引擎要使用的 youtube-dl 可执行文件',
      proxy: {
        title: '用于 UNM 的代理服务器',
        desc1: '请求如 YouTube 音源服务时要使用的代理服务器',
        desc2: '留空则不进行相关设置',
      },
    },
    localMusic: {
      localMusicShowDefault: {
        text: '本地音乐默认显示',
        localSongs: '本地歌曲',
        playlists: '离线歌单',
        albums: '专辑',
        artists: '艺人',
      },
      localMusicFirst: {
        title: '优先使用本地歌曲',
        desc: '假如本地歌曲A匹配的在线歌曲为B，当播放在线歌曲B时，使用本地歌曲A播放',
      },
      matchStatus: {
        title: '本地歌曲匹配状态',
        desc: '切换开关对已匹配的歌曲无影响',
      },
      exportLocalMusic: '导出本地歌曲信息',
      importLocalMusic: '导入本地歌曲信息',
      clearLocalMusic: '清空本地歌曲信息',
      localMusicPath: '本地歌曲扫描路径',
      localMusicMatchedStatus: '本地歌曲匹配状态',
    },
  },
  contextMenu: {
    play: '播放',
    addToQueue: '添加到队列',
    reMatchTrack: '重新匹配歌曲',
    accurateMatch: '精准匹配',
    deleteMatch: '取消匹配',
    addToLocalPlaylist: '添加到本地歌单',
    removeFromQueue: '从队列删除',
    showInFolder: '在文件管理器中显示',
    removeLocalTrack: '移除歌曲',
    recoveryTrack: '恢复移除歌曲',
    finish: '完成',
    reloadLocalMusic: '重新扫描',
    batchOperation: '批量操作',
    selectAll: '全选',
    saveToMyLikedSongs: '添加到我喜欢的音乐',
    removeFromMyLikedSongs: '从喜欢的音乐中删除',
    saveToLibrary: '保存到音乐库',
    removeFromLibrary: '从音乐库删除',
    addToPlaylist: '添加到歌单',
    changeLyricTime: '歌词进度',
    showLyric: '查看歌词',
    showComment: '查看评论',
    operationOption: '操作菜单',
    playBackSpeed: '倍速播放',
    searchInPlaylist: '歌单内搜索',
    editPlaylistInfo: '编辑歌单信息',
    deletePlaylist: '删除歌单',
    convertToOnlinePlaylist: '转存至音乐库',
    copyUrl: '复制链接',
    openInBrowser: '在浏览器中打开',
    allPlaylists: '全部歌单',
    minePlaylists: '创建的歌单',
    likedPlaylists: '收藏的歌单',
    localMusic: '本地歌曲',
    defaultSort: '默认排序',
    sortByName: '按名称排列',
    ascendSort: '按时间升序排列',
    descendSort: '按时间降序排列',
    cardiacMode: '心动模式',
  },
  toast: {
    savedToPlaylist: '已添加到歌单',
    convertedToLibrary: '已保存至音乐库',
    deletedComment: '已删除评论',
    removedFromPlaylist: '已从歌单中删除',
    savedToMyLikedSongs: '已添加到我喜欢的音乐',
    removedFromMyLikedSongs: '已从喜欢的音乐中删除',
    copied: '已复制',
    copyFailed: '复制失败：',
    needToLogin: '此操作需要登录网易云帐号',
    commentFailed: '评论失败',
  },
};
