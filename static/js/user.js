// chilejia 的隐藏
$(function() {
    $(".list .juanbaojiaban").click(function() {
        $(".childjia").toggle()
    })
})

//画柱状图
$(function() {
    var d1 = [{
        label: "近半年的卓越行为积分统计图",
        data: [
            [7, 113],
            [8, 116],
            [9, 106]
        ]
    }];

    var stack = 0,
        bars = true,
        lines = false,
        steps = false;

    $.plot($("#bar1"), d1, {
        series: {
            color: '#333',
            abel: 'morris',
            stack: 0.2,
            lines: {
                //show: true, 
                fill: true,
                steps: false
            },
            point: {
                show: true,
            },
            bars: {
                show: true,
                barWidth: 0.4
            }
        },
        xaxis: {
            ticks: [
                [7, "2020-7"],
                [8, "2020-8"],
                [9, "2020-9"]
            ]
        }

    });
});