(() => {
    $(document).foundation()
    var Circlerotate = document.querySelector('.circle1');
    var movielists = document.querySelectorAll('.movielist');

    function circleRO() {
        TweenMax.to(Circlerotate, 1, {x: 600, rotation: 120, xScale: 1.1, yScale: 1.1});
    }

    function uncircleRO() {
        TweenMax.to(Circlerotate, 1, {x: 0, y: 0, rotation: 0, xScale: 1, yScale: 1});
    }
    // Achieved the function in old way

    // function loadDoc() {
    //     var e = parseInt(this.className.split('top')[1]);
    //     var xhttp = new XMLHttpRequest();
    //     xhttp.onreadystatechange = function () {
    //         if (this.readyState == 4 && this.status == 200) {
    //             var data = JSON.parse(this.responseText);
    //             // data.list[0];
    //             // data.list[0].title
    //             // for (var i = 0; i < data.list.length; i++) {
    //             // document.querySelectorctor(".top" + (i + 1))
    //             document.querySelector(".topp" + e).innerHTML = data.list[e - 1].title;
    //             document.querySelector('.description').innerHTML= data.list[e - 1].fulltext;
    //             document.querySelector('.description_title').style.display = "block";
    //             document.querySelector('#container1').style.display = "none";
    //             document.querySelector('.pie').style.display = "none";
    //             }
    //         };
    //     xhttp.open("GET", "data.json", true);
    //     xhttp.send();

    // }


    // new method
    function loadDoc(data) {
        var arr = [data[0], data[1], data[2], data[3], data[4]]
        var obj = {}
        for(var titlea in arr){
            obj[titlea]=arr[titlea]
        }
        function loadDoc1(){
            var e =this.className.split('top')[1];
            document.querySelector(".topp" + e).textContent = obj[e-1].title;
            document.querySelector('.description').textContent = obj[e-1].fullcontent;
            document.querySelector('.description_title').style.display = "block";
            document.querySelector('#container1').style.display = "none";
            document.querySelector('.pie').style.display = "none";
        } 
        movielists.forEach(movielist => movielist.addEventListener('click', loadDoc1));
 }

    function getData(){
        fetch('./admin/connect.php')
        .then(res => res.json())
        .then(data => {
            loadDoc(data);
    })
        .catch(function(error){
            console.log(error);
        });
    }
    getData();
    
    Circlerotate.addEventListener('mouseover', circleRO);
    Circlerotate.addEventListener('mouseout', uncircleRO);
 
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

    var dom1 = document.getElementById("container1");
    var myChart1 = echarts.init(dom1);
    var app1 = {};
    option1 = null
    option1 = {
        //backgroundColor: 'white',
    
        title: {
            text: 'Movie Channels',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#000000'
            }
        },
    
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
    
        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series : [
            {
                name:'Sources',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data:[
                    {value:335, name:'Website'},
                    {value:310, name:'Phone'},
                    {value:274, name:'YouTube'},
                    {value:235, name:'Ads'},
                    {value:400, name:'Cinema'}
                ].sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {
                    normal: {
                        textStyle: {
                            color: 'black'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'black'
                        },
                        smooth: 0.2,
                        length: 15,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
    
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };;
    if (option1 && typeof option1 === "object") {
        myChart1.setOption(option1, true);
    }
})();