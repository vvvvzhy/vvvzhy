muban.短视2.二级.title = '.slide-info-title&&Text;.hl-ma0&&Text';
muban.短视2.二级.img = '.detail-pic&&img&&data-src';
muban.短视2.二级.desc = '.fraction&&Text;;;.slide-info:eq(3)--strong&&Text;.slide-info:eq(2)--strong&&Text';
var rule={
    title:'NY影院',
    模板:'短视2',
    host:'https://www.nycvod.com',
    homeUrl:'/index.php/label/rb.html',
    // url: '/index.php/api/vod#type=fyfilter&page=fypage',
    url: '/vodshow/fyfilter.html',
    filterable:1,//是否启用分类筛选,
    filter_url:'{{fl.cateId}}-{{fl.area}}-{{fl.by or "time"}}-{{fl.class}}-{{fl.lang}}-{{fl.letter}}---fypage---{{fl.year}}',
    filter:{
        "1":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"1"},{"n":"动作片","v":"9"},{"n":"喜剧片","v":"10"},{"n":"奇幻片","v":"11"},{"n":"科幻片","v":"12"},{"n":"恐怖片","v":"22"},{"n":"惊悚片","v":"27"},{"n":"悬疑片","v":"23"},{"n":"爱情片","v":"21"},{"n":"战争片","v":"20"},{"n":"剧情片","v":"6"},{"n":"网络电影","v":"24"},{"n":"犯罪片","v":"26"},{"n":"伦理片","v":"8"},{"n":"灾难片","v":"7"},{"n":"动画电影","v":"25"},{"n":"冒险片","v":"28"},{"n":"同性片","v":"44"},{"n":"纪录片","v":"29"},{"n":"歌舞片","v":"45"},{"n":"经典片","v":"46"}]},{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"剧情","v":"剧情"},{"n":"喜剧","v":"喜剧"},{"n":"爱情","v":"爱情"},{"n":"恐怖","v":"恐怖"},{"n":"惊悚","v":"惊悚"},{"n":"动作","v":"动作"},{"n":"科幻","v":"科幻"},{"n":"奇幻","v":"奇幻"},{"n":"战争","v":"战争"},{"n":"警匪","v":"警匪"},{"n":"灾难","v":"灾难"},{"n":"犯罪","v":"犯罪"},{"n":"动画","v":"动画"},{"n":"武侠","v":"武侠"},{"n":"冒险","v":"冒险"},{"n":"仙侠","v":"仙侠"},{"n":"家庭","v":"家庭"},{"n":"古装","v":"古装"},{"n":"悬疑","v":"悬疑"},{"n":"伦理","v":"伦理"},{"n":"青春","v":"青春"},{"n":"同性","v":"同性"},{"n":"情色","v":"情色"},{"n":"文艺","v":"文艺"},{"n":"历史","v":"历史"},{"n":"运动","v":"运动"},{"n":"儿童","v":"儿童"},{"n":"传记","v":"传记"},{"n":"经典","v":"经典"},{"n":"西部","v":"西部"},{"n":"网络电影","v":"网络电影"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"中国大陆"},{"n":"中国香港","v":"中国香港"},{"n":"中国台湾","v":"中国台湾"},{"n":"美国","v":"美国"},{"n":"法国","v":"法国"},{"n":"英国","v":"英国"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"德国","v":"德国"},{"n":"泰国","v":"泰国"},{"n":"印度","v":"印度"},{"n":"意大利","v":"意大利"},{"n":"西班牙","v":"西班牙"},{"n":"加拿大","v":"加拿大"},{"n":"波兰","v":"波兰"},{"n":"墨西哥","v":"墨西哥"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"法语","v":"法语"},{"n":"德语","v":"德语"},{"n":"泰语","v":"泰语"},{"n":"波兰语","v":"波兰语"},{"n":"印地语","v":"印地语"},{"n":"西班牙语","v":"西班牙语"},{"n":"其它","v":"其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},{"key":"by","name":"排序","value":[{"n":"最新","v":"time"},{"n":"最热","v":"hits"},{"n":"评分","v":"score"}]}],
        "2":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"2"},{"n":"国产剧","v":"30"},{"n":"欧美剧","v":"47"},{"n":"日韩剧","v":"18"},{"n":"港台剧","v":"16"},{"n":"新马泰剧","v":"14"},{"n":"其他剧","v":"13"}]},{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"武侠","v":"武侠"},{"n":"古装","v":"古装"},{"n":"战争","v":"战争"},{"n":"悬疑","v":"悬疑"},{"n":"喜剧","v":"喜剧"},{"n":"家庭","v":"家庭"},{"n":"犯罪","v":"犯罪"},{"n":"动作","v":"动作"},{"n":"奇幻","v":"奇幻"},{"n":"剧情","v":"剧情"},{"n":"历史","v":"历史"},{"n":"乡村","v":"乡村"},{"n":"网剧","v":"网剧"},{"n":"仙侠","v":"仙侠"},{"n":"短剧","v":"短剧"},{"n":"穿越","v":"穿越"},{"n":"爱情","v":"爱情"},{"n":"科幻","v":"科幻"},{"n":"同性","v":"同性"},{"n":"运动","v":"运动"},{"n":"歌舞","v":"歌舞"},{"n":"惊悚","v":"惊悚"},{"n":"恐怖","v":"恐怖"},{"n":"冒险","v":"冒险"},{"n":"传记","v":"传记"},{"n":"其他","v":"其他"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"中国大陆"},{"n":"中国香港","v":"中国香港"},{"n":"中国台湾","v":"中国台湾"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"美国","v":"美国"},{"n":"泰国","v":"泰国"},{"n":"英国","v":"英国"},{"n":"新加坡","v":"新加坡"},{"n":"马来西亚","v":"马来西亚"},{"n":"澳大利亚","v":"澳大利亚"},{"n":"波兰","v":"波兰"},{"n":"印度","v":"印度"},{"n":"印度尼西亚","v":"印度尼西亚"},{"n":"西班牙","v":"西班牙"},{"n":"墨西哥","v":"墨西哥"},{"n":"法国","v":"法国"},{"n":"德国","v":"德国"},{"n":"意大利","v":"意大利"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"西班牙语","v":"西班牙语"},{"n":"泰语","v":"泰语"},{"n":"波兰语","v":"波兰语"},{"n":"印地语","v":"印地语"},{"n":"法语","v":"法语"},{"n":"德语","v":"德语"},{"n":"其它","v":"其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},{"key":"by","name":"排序","value":[{"n":"最新","v":"time"},{"n":"最热","v":"hits"},{"n":"评分","v":"score"}]}],
        "3":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"3"},{"n":"国产综艺","v":"31"},{"n":"日韩综艺","v":"32"},{"n":"欧美综艺","v":"34"},{"n":"港台综艺","v":"35"},{"n":"其他综艺","v":"37"}]},{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"曲艺","v":"曲艺"},{"n":"真人秀","v":"真人秀"},{"n":"音乐","v":"音乐"},{"n":"搞笑","v":"搞笑"},{"n":"选秀","v":"选秀"},{"n":"网综","v":"网综"},{"n":"脱口秀","v":"脱口秀"},{"n":"竞技","v":"竞技"},{"n":"情感访谈","v":"情感访谈"},{"n":"演唱会","v":"演唱会"},{"n":"晚会","v":"晚会"},{"n":"儿童","v":"儿童"},{"n":"歌舞","v":"歌舞"},{"n":"运动","v":"运动"},{"n":"历史","v":"历史"},{"n":"爱情","v":"爱情"},{"n":"其它","v":"其它"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"中国大陆"},{"n":"中国香港","v":"中国香港"},{"n":"中国台湾","v":"中国台湾"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"美国","v":"美国"},{"n":"泰国","v":"泰国"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},{"key":"by","name":"排序","value":[{"n":"最新","v":"time"},{"n":"最热","v":"hits"},{"n":"评分","v":"score"}]}],
        "4":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"4"},{"n":"日韩动漫","v":"38"},{"n":"国产动漫","v":"39"},{"n":"欧美动漫","v":"40"},{"n":"港台动漫","v":"42"},{"n":"其他动漫","v":"43"}]},{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"情感","v":"情感"},{"n":"奇幻","v":"奇幻"},{"n":"热血","v":"热血"},{"n":"推理","v":"推理"},{"n":"搞笑","v":"搞笑"},{"n":"冒险","v":"冒险"},{"n":"萝莉","v":"萝莉"},{"n":"校园","v":"校园"},{"n":"动作","v":"动作"},{"n":"机战","v":"机战"},{"n":"运动","v":"运动"},{"n":"战争","v":"战争"},{"n":"古装","v":"古装"},{"n":"竞技","v":"竞技"},{"n":"历史","v":"历史"},{"n":"惊悚","v":"惊悚"},{"n":"犯罪","v":"犯罪"},{"n":"益智","v":"益智"},{"n":"励志","v":"励志"},{"n":"仙侠","v":"仙侠"},{"n":"武侠","v":"武侠"},{"n":"音乐","v":"音乐"},{"n":"剧情","v":"剧情"},{"n":"动画","v":"动画"},{"n":"悬疑","v":"悬疑"},{"n":"科幻","v":"科幻"},{"n":"喜剧","v":"喜剧"},{"n":"儿童","v":"儿童"},{"n":"其他","v":"其他"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"中国大陆"},{"n":"中国台湾","v":"中国台湾"},{"n":"中国香港","v":"中国香港"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"美国","v":"美国"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"日语","v":"日语"},{"n":"韩语","v":"韩语"},{"n":"闽南语","v":"闽南语"},{"n":"粤语","v":"粤语"},{"n":"西班牙语","v":"西班牙语"},{"n":"其它","v":"其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},{"key":"by","name":"排序","value":[{"n":"最新","v":"time"},{"n":"最热","v":"hits"},{"n":"评分","v":"score"}]}],
        "5":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"篮球","v":"篮球"},{"n":"足球","v":"足球"},{"n":"桌球","v":"桌球"},{"n":"竞技","v":"竞技"},{"n":"网球","v":"网球"}]},{"key":"by","name":"排序","value":[{"n":"最新","v":"time"},{"n":"最热","v":"hits"},{"n":"评分","v":"score"}]}]
    },
    filter_def:{
        1:{cateId:'1'},
        2:{cateId:'2'},
        3:{cateId:'3'},
        4:{cateId:'4'},
        5:{cateId:'5'}
    },
    // class_name:'电影&电视剧&综艺&动漫&竞技体育',
    // class_url:'1&2&3&4&5',
	class_parse:'.head-more&&.nav-link;a&&Text;a&&href;/(\\d+).html',
	class_name:'',
    class_url:'',
    detailUrl:'/voddetail/fyid.html',
    推荐:'.list-vod .public-list-box;a&&title;.lazy&&data-src;.public-list-prb&&Text;a&&href',
    double: false, // 推荐内容是否双层定位
    一级:'.public-list-box;a&&title;.lazy&&data-src;.public-prt&&Text;a&&href',
}