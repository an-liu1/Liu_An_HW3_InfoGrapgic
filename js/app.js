(() => {
    $(document).foundation()
    var dom = document.querySelector('#container');
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    var posList = [
        'left', 'right', 'top', 'bottom',
        'inside',
        'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
        'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
    ];
    var Circlerotate = document.querySelector('.circle1');
    var movielists = document.querySelectorAll('.movielist');

    function circleRO() {
        TweenMax.to(Circlerotate, 1, {x: 600, rotation: 120, xScale: 1.1, yScale: 1.1});
    }

    function uncircleRO() {
        TweenMax.to(Circlerotate, 1, {x: 0, y: 0, rotation: 0, xScale: 1, yScale: 1});
    }

    function loadDoc() {
        var e = parseInt(this.className.split('top')[1]);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText);
                // data.list[0];//取整个json下的list对象的下标为0的内容====={"title": "BLACK PANTHER1",fulltext": "1After the death of his father, T’Challa, the King of Wakanda, returns home to the isolated, technologically advanced African nation to succeed to the throne and take his rightful place as king. But when a powerful old enemy reappears, T’Challa’s mettle as king—and Black Panther—is tested when he is drawn into a formidable conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people and their way of life.  "}
                // data.list[0].title//获取上面对象的title属性值========="BLACK PANTHER1"}
                // for (var i = 0; i < data.list.length; i++) {
                // document.querySelectorctor(".top" + (i + 1))
                document.querySelector(".topp" + e).innerHTML = data.list[e - 1].title;
                document.querySelector('.description').innerHTML= data.list[e - 1].fulltext;
                }
            };
        xhttp.open("GET", "data.json", true);
        xhttp.send();

    }

    movielists.forEach(movielist => movielist.addEventListener('click', loadDoc));
    Circlerotate.addEventListener('mouseover', circleRO);
    Circlerotate.addEventListener('mouseout', uncircleRO);
 
    app.configParameters = {
        rotate: {
            min: -90,
            max: 90
        },
        align: {
            options: {
                left: 'left',
                center: 'center',
                right: 'right'
            }
        },
        verticalAlign: {
            options: {
                top: 'top',
                middle: 'middle',
                bottom: 'bottom'
            }
        },
        position: {
            options: echarts.util.reduce(posList, function (map, pos) {
                map[pos] = pos;
                return map;
            }, {})
        },
        distance: {
            min: 0,
            max: 1500
        }
    };

    app.config = {
        rotate: 90,
        align: 'left',
        verticalAlign: 'middle',
        position: 'insideBottom',
        distance: 15,
        onChange: function () {
            var labelOption = {
                normal: {
                    rotate: app.config.rotate,
                    align: app.config.align,
                    verticalAlign: app.config.verticalAlign,
                    position: app.config.position,
                    distance: app.config.distance
                }
            };
            myChart.setOption({
                series: [{
                    label: labelOption
                }, {
                    label: labelOption
                }, {
                    label: labelOption
                }, {
                    label: labelOption
                }, {
                    label: labelOption
                }]
            });
        }
    };


    var labelOption = {
        normal: {
            show: true,
            position: app.config.position,
            distance: app.config.distance,
            align: app.config.align,
            verticalAlign: app.config.verticalAlign,
            rotate: app.config.rotate,
            formatter: '{c}  {name|{a}}',
            fontSize: 16,
            rich: {
                name: {
                    textBorderColor: '#fff'
                }
            }
        }
    };

    option = {
        color: ['#003366', '#006699', '#4cabce', '#e5323e'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['Black Panther', 'Avengers: Infinity War', 'Incredibles 2', 'Jurassic World: Fallen Kingkom', 'Deadpool 2']
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                axisTick: {show: false},
                data: ['1st day box office', '2nd day box office', '3rd day box office', '4th day box office', '5th day box office']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Black Panther',
                type: 'bar',
                barGap: 0,
                label: labelOption,
                data: [1310, 1625, 1028, 734, 990]
            },
            {
                name: 'Avengers: Infinity War',
                type: 'bar',
                label: labelOption,
                data: [3644, 4625, 3121, 1016, 756]
            },
            {
                name: 'Incredibles 2',
                type: 'bar',
                label: labelOption,
                data: [2825, 1565, 1482, 1371, 1093]
            },
            {
                name: 'Jurassic World: Fallen Kingkom',
                type: 'bar',
                label: labelOption,
                data: [1305, 1500, 1162, 999, 1240]
            },
            {
                name: 'Deadpool 2',
                type: 'bar',
                label: labelOption,
                data: [998, 877, 701, 899, 680]
            }
        ]
    };;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
})();