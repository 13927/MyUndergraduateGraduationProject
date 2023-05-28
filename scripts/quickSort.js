class QuickSort extends Base {

    creaJointJs() {
        var namespace = joint.shapes;
        this.jt_graph = new joint.dia.Graph({}, { cellNamespace: namespace });
        this.jt_paper = new joint.dia.Paper({
            el: document.getElementById(this.idOfPaperElement),
            model: this.jt_graph,
            width: 1000,
            height: 650,
            // background: { color: 'rgba(0, 255, 0, 0.3)' },
            gridSize: 10,
            drawGrid: true,
            cellViewNamespace: namespace
        });

        this.text1 = new joint.shapes.standard.Rectangle();
        this.text1.position(70, 50);
        this.text1.resize(150, 100);
        this.text1.attr({
            body: {
                fill: 'lightblue'
            },
            label: {
                text: 'pivotkey =          ',
                fill: 'black'
            }
        });
        this.text1.addTo(this.jt_graph);

        this.rect00 = new joint.shapes.standard.Rectangle();
        this.rect00.position(230, 180);
        this.rect00.resize(60, 60);
        this.rect00.attr({
            body: {
                fill: 'white'
            },
            label: {
                text: '49',
                fill: 'black'
            }
        });
        this.rect00.addTo(this.jt_graph);

        this.rect01 = this.rect00.clone();
        this.rect01.position(290, 180);
        this.rect01.attr("label/text", "38")
        this.rect01.addTo(this.jt_graph);

        this.rect02 = this.rect00.clone();
        this.rect02.position(350, 180);
        this.rect02.attr("label/text", "65")
        this.rect02.addTo(this.jt_graph);

        this.rect03 = this.rect00.clone();
        this.rect03.position(410, 180);
        this.rect03.attr("label/text", "97")
        this.rect03.addTo(this.jt_graph);

        this.rect04 = this.rect00.clone();
        this.rect04.position(470, 180);
        this.rect04.attr("label/text", "76")
        this.rect04.addTo(this.jt_graph);

        this.rect05 = this.rect00.clone();
        this.rect05.position(530, 180);
        this.rect05.attr("label/text", "13")
        this.rect05.addTo(this.jt_graph);

        this.rect06 = this.rect00.clone();
        this.rect06.position(590, 180);
        this.rect06.attr("label/text", "27")
        this.rect06.addTo(this.jt_graph);

        this.rect07 = this.rect00.clone();
        this.rect07.position(650, 180);
        this.rect07.attr("label/text", "49")
        this.rect07.addTo(this.jt_graph);


        this.linki = new joint.shapes.standard.Link({
            source: { x: 260, y: 290 },
            target: { x: 260, y: 240 },
            attrs: {
                line: {
                    stroke: "black",
                    strokeWidth: 2,
                    // strokeDasharray: '4 2',
                    sourceMarker: {
                    },
                    targetMarker: {
                        // 'type': 'circle',
                        // 'r': 0
                    }
                }
            }
        });
        this.linki.labels([{
            attrs: {
                text: {
                    text: 'i',
                    // fill: "orange"
                }

            }
        }]);
        this.linki.addTo(this.jt_graph);

        this.linkj = new joint.shapes.standard.Link({
            source: { x: 680, y: 290 },
            target: { x: 680, y: 240 },
            attrs: {
                line: {
                    stroke: "black",
                    strokeWidth: 2,
                    // strokeDasharray: '4 2',
                    sourceMarker: {
                    },
                    targetMarker: {
                        // 'type': 'circle',
                        // 'r': 0
                    }
                }
            }
        });
        this.linkj.labels([{
            attrs: {
                text: {
                    text: 'j',
                    // fill: "orange"
                }

            }
        }]);
        this.linkj.addTo(this.jt_graph);


    }


    status1() {
        this.text1.attr('label/text', 'pivotkey = *i       ');
        this.rect00.attr("label/text", "49");
        this.rect01.attr("label/text", "38");
        this.rect02.attr("label/text", "65");
        this.rect03.attr("label/text", "97");
        this.rect04.attr("label/text", "76");
        this.rect05.attr("label/text", "13");
        this.rect06.attr("label/text", "27");
        this.rect07.attr("label/text", "49");

        this.rect00.attr("body/fill", 'white');
        this.rect01.attr("body/fill", 'white');
        this.rect02.attr("body/fill", 'white');
        this.rect03.attr("body/fill", 'white');
        this.rect04.attr("body/fill", 'white');
        this.rect05.attr("body/fill", 'white');
        this.rect06.attr("body/fill", 'white');
        this.rect07.attr("body/fill", 'white');

        this.linki.target({ x: 260, y: 240 });
        this.linki.source({ x: 260, y: 290 });
        this.linki.attr('line/stroke', 'black');

        this.linkj.target({ x: 680, y: 240 });
        this.linkj.source({ x: 680, y: 290 });
        this.linkj.attr('line/stroke', 'black');

        this.current_step = 1;
    }

    status2() {
        this.text1.attr('label/text', 'pivotkey = 49      ');
        this.rect00.attr("label/text", "49");
        this.rect01.attr("label/text", "38");
        this.rect02.attr("label/text", "65");
        this.rect03.attr("label/text", "97");
        this.rect04.attr("label/text", "76");
        this.rect05.attr("label/text", "13");
        this.rect06.attr("label/text", "27");
        this.rect07.attr("label/text", "49");

        this.rect00.attr("body/fill", 'white');
        this.rect01.attr("body/fill", 'white');
        this.rect02.attr("body/fill", 'white');
        this.rect03.attr("body/fill", 'white');
        this.rect04.attr("body/fill", 'white');
        this.rect05.attr("body/fill", 'white');
        this.rect06.attr("body/fill", 'white');
        this.rect07.attr("body/fill", 'white');

        this.linki.target({ x: 260, y: 240 });
        this.linki.source({ x: 260, y: 290 });
        this.linki.attr('line/stroke', 'black');

        this.linkj.target({ x: 680, y: 240 });
        this.linkj.source({ x: 680, y: 290 });
        this.linkj.attr('line/stroke', 'orange');
        this.current_step = 2;
    }

    status3() {
        this.text1.attr('label/text', 'pivotkey = 49      ');
        this.rect00.attr("label/text", "49");
        this.rect01.attr("label/text", "38");
        this.rect02.attr("label/text", "65");
        this.rect03.attr("label/text", "97");
        this.rect04.attr("label/text", "76");
        this.rect05.attr("label/text", "13");
        this.rect06.attr("label/text", "27");
        this.rect07.attr("label/text", "49");

        this.rect00.attr("body/fill", 'white');
        this.rect01.attr("body/fill", 'white');
        this.rect02.attr("body/fill", 'white');
        this.rect03.attr("body/fill", 'white');
        this.rect04.attr("body/fill", 'white');
        this.rect05.attr("body/fill", 'white');
        this.rect06.attr("body/fill", 'white');
        this.rect07.attr("body/fill", 'white');

        this.linki.target({ x: 260, y: 240 });
        this.linki.source({ x: 260, y: 290 });
        this.linki.attr('line/stroke', 'black');

        this.linkj.target({ x: 620, y: 240 });
        this.linkj.source({ x: 620, y: 290 });
        this.linkj.attr('line/stroke', 'orange');
        this.current_step = 3;
    }
    status4() {
        this.text1.attr('label/text', 'pivotkey = 49      ');
        this.rect00.attr("label/text", "27");
        this.rect01.attr("label/text", "38");
        this.rect02.attr("label/text", "65");
        this.rect03.attr("label/text", "97");
        this.rect04.attr("label/text", "76");
        this.rect05.attr("label/text", "13");
        this.rect06.attr("label/text", " ");
        this.rect07.attr("label/text", "49");

        this.rect00.attr("body/fill", 'orange');
        this.rect01.attr("body/fill", 'white');
        this.rect02.attr("body/fill", 'white');
        this.rect03.attr("body/fill", 'white');
        this.rect04.attr("body/fill", 'white');
        this.rect05.attr("body/fill", 'white');
        this.rect06.attr("body/fill", 'white');
        this.rect07.attr("body/fill", 'white');

        this.linki.target({ x: 260, y: 240 });
        this.linki.source({ x: 260, y: 290 });
        this.linki.attr('line/stroke', 'black');

        this.linkj.target({ x: 620, y: 240 });
        this.linkj.source({ x: 620, y: 290 });
        this.linkj.attr('line/stroke', 'orange');

        this.current_step = 4;
    }
    status5() {
        this.text1.attr('label/text', 'pivotkey = 49      ');
        this.rect00.attr("label/text", "27");
        this.rect01.attr("label/text", "38");
        this.rect02.attr("label/text", "65");
        this.rect03.attr("label/text", "97");
        this.rect04.attr("label/text", "76");
        this.rect05.attr("label/text", "13");
        this.rect06.attr("label/text", " ");
        this.rect07.attr("label/text", "49");

        this.rect00.attr("body/fill", 'white');
        this.rect01.attr("body/fill", 'white');
        this.rect02.attr("body/fill", 'white');
        this.rect03.attr("body/fill", 'white');
        this.rect04.attr("body/fill", 'white');
        this.rect05.attr("body/fill", 'white');
        this.rect06.attr("body/fill", 'white');
        this.rect07.attr("body/fill", 'white');

        this.linki.target({ x: 320, y: 240 });
        this.linki.source({ x: 320, y: 290 });
        this.linki.attr('line/stroke', 'orange');

        this.linkj.target({ x: 620, y: 240 });
        this.linkj.source({ x: 620, y: 290 });
        this.linkj.attr('line/stroke', 'black');

        this.current_step = 5;
    }
    status6() {
        this.text1.attr('label/text', 'pivotkey = 49      ');
        this.rect00.attr("label/text", "27");
        this.rect01.attr("label/text", "38");
        this.rect02.attr("label/text", "65");
        this.rect03.attr("label/text", "97");
        this.rect04.attr("label/text", "76");
        this.rect05.attr("label/text", "13");
        this.rect06.attr("label/text", " ");
        this.rect07.attr("label/text", "49");

        this.rect00.attr("body/fill", 'white');
        this.rect01.attr("body/fill", 'white');
        this.rect02.attr("body/fill", 'white');
        this.rect03.attr("body/fill", 'white');
        this.rect04.attr("body/fill", 'white');
        this.rect05.attr("body/fill", 'white');
        this.rect06.attr("body/fill", 'white');
        this.rect07.attr("body/fill", 'white');

        this.linki.target({ x: 380, y: 240 });
        this.linki.source({ x: 380, y: 290 });
        this.linki.attr('line/stroke', 'orange');

        this.linkj.target({ x: 620, y: 240 });
        this.linkj.source({ x: 620, y: 290 });
        this.linkj.attr('line/stroke', 'black');

        this.current_step = 6;
    }

    status7() {
        this.text1.attr('label/text', 'pivotkey = 49      ');
        this.rect00.attr("label/text", "27");
        this.rect01.attr("label/text", "38");
        this.rect02.attr("label/text", " ");
        this.rect03.attr("label/text", "97");
        this.rect04.attr("label/text", "76");
        this.rect05.attr("label/text", "13");
        this.rect06.attr("label/text", "65");
        this.rect07.attr("label/text", "49");

        this.rect00.attr("body/fill", 'white');
        this.rect01.attr("body/fill", 'white');
        this.rect02.attr("body/fill", 'white');
        this.rect03.attr("body/fill", 'white');
        this.rect04.attr("body/fill", 'white');
        this.rect05.attr("body/fill", 'white');
        this.rect06.attr("body/fill", 'orange');
        this.rect07.attr("body/fill", 'white');

        this.linki.target({ x: 380, y: 240 });
        this.linki.source({ x: 380, y: 290 });
        this.linki.attr('line/stroke', 'orange');

        this.linkj.target({ x: 620, y: 240 });
        this.linkj.source({ x: 620, y: 290 });
        this.linkj.attr('line/stroke', 'black');

        this.current_step = 7;
    }

    status8() {
        this.text1.attr('label/text', 'pivotkey = 49      ');
        this.rect00.attr("label/text", "27");
        this.rect01.attr("label/text", "38");
        this.rect02.attr("label/text", " ");
        this.rect03.attr("label/text", "97");
        this.rect04.attr("label/text", "76");
        this.rect05.attr("label/text", "13");
        this.rect06.attr("label/text", "65");
        this.rect07.attr("label/text", "49");

        this.rect00.attr("body/fill", 'white');
        this.rect01.attr("body/fill", 'white');
        this.rect02.attr("body/fill", 'white');
        this.rect03.attr("body/fill", 'white');
        this.rect04.attr("body/fill", 'white');
        this.rect05.attr("body/fill", 'white');
        this.rect06.attr("body/fill", 'white');
        this.rect07.attr("body/fill", 'white');

        this.linki.target({ x: 380, y: 240 });
        this.linki.source({ x: 380, y: 290 });
        this.linki.attr('line/stroke', 'black');

        this.linkj.target({ x: 560, y: 240 });
        this.linkj.source({ x: 560, y: 290 });
        this.linkj.attr('line/stroke', 'orange');

        this.current_step = 8;
    }

    status9() {
        this.text1.attr('label/text', 'pivotkey = 49      ');
        this.rect00.attr("label/text", "27");
        this.rect01.attr("label/text", "38");
        this.rect02.attr("label/text", "13");
        this.rect03.attr("label/text", "97");
        this.rect04.attr("label/text", "76");
        this.rect05.attr("label/text", " ");
        this.rect06.attr("label/text", "65");
        this.rect07.attr("label/text", "49");

        this.rect00.attr("body/fill", 'white');
        this.rect01.attr("body/fill", 'white');
        this.rect02.attr("body/fill", 'orange');
        this.rect03.attr("body/fill", 'white');
        this.rect04.attr("body/fill", 'white');
        this.rect05.attr("body/fill", 'white');
        this.rect06.attr("body/fill", 'white');
        this.rect07.attr("body/fill", 'white');

        this.linki.target({ x: 380, y: 240 });
        this.linki.source({ x: 380, y: 290 });
        this.linki.attr('line/stroke', 'black');

        this.linkj.target({ x: 560, y: 240 });
        this.linkj.source({ x: 560, y: 290 });
        this.linkj.attr('line/stroke', 'orange');

        this.current_step = 9;
    }

    status10() {
        this.text1.attr('label/text', 'pivotkey = 49      ');
        this.rect00.attr("label/text", "27");
        this.rect01.attr("label/text", "38");
        this.rect02.attr("label/text", "13");
        this.rect03.attr("label/text", "97");
        this.rect04.attr("label/text", "76");
        this.rect05.attr("label/text", " ");
        this.rect06.attr("label/text", "65");
        this.rect07.attr("label/text", "49");

        this.rect00.attr("body/fill", 'white');
        this.rect01.attr("body/fill", 'white');
        this.rect02.attr("body/fill", 'white');
        this.rect03.attr("body/fill", 'white');
        this.rect04.attr("body/fill", 'white');
        this.rect05.attr("body/fill", 'white');
        this.rect06.attr("body/fill", 'white');
        this.rect07.attr("body/fill", 'white');

        this.linki.target({ x: 440, y: 240 });
        this.linki.source({ x: 440, y: 290 });
        this.linki.attr('line/stroke', 'orange');

        this.linkj.target({ x: 560, y: 240 });
        this.linkj.source({ x: 560, y: 290 });
        this.linkj.attr('line/stroke', 'black');

        this.current_step = 10;
    }

    status11() {
        this.text1.attr('label/text', 'pivotkey = 49      ');
        this.rect00.attr("label/text", "27");
        this.rect01.attr("label/text", "38");
        this.rect02.attr("label/text", "13");
        this.rect03.attr("label/text", " ");
        this.rect04.attr("label/text", "76");
        this.rect05.attr("label/text", "97");
        this.rect06.attr("label/text", "65");
        this.rect07.attr("label/text", "49");

        this.rect00.attr("body/fill", 'white');
        this.rect01.attr("body/fill", 'white');
        this.rect02.attr("body/fill", 'white');
        this.rect03.attr("body/fill", 'white');
        this.rect04.attr("body/fill", 'white');
        this.rect05.attr("body/fill", 'orange');
        this.rect06.attr("body/fill", 'white');
        this.rect07.attr("body/fill", 'white');

        this.linki.target({ x: 440, y: 240 });
        this.linki.source({ x: 440, y: 290 });
        this.linki.attr('line/stroke', 'orange');

        this.linkj.target({ x: 560, y: 240 });
        this.linkj.source({ x: 560, y: 290 });
        this.linkj.attr('line/stroke', 'black');

        this.current_step = 11;
    }

    status12() {
        this.text1.attr('label/text', 'pivotkey = 49      ');
        this.rect00.attr("label/text", "27");
        this.rect01.attr("label/text", "38");
        this.rect02.attr("label/text", "13");
        this.rect03.attr("label/text", " ");
        this.rect04.attr("label/text", "76");
        this.rect05.attr("label/text", "97");
        this.rect06.attr("label/text", "65");
        this.rect07.attr("label/text", "49");

        this.rect00.attr("body/fill", 'white');
        this.rect01.attr("body/fill", 'white');
        this.rect02.attr("body/fill", 'white');
        this.rect03.attr("body/fill", 'white');
        this.rect04.attr("body/fill", 'white');
        this.rect05.attr("body/fill", 'white');
        this.rect06.attr("body/fill", 'white');
        this.rect07.attr("body/fill", 'white');

        this.linki.target({ x: 440, y: 240 });
        this.linki.source({ x: 440, y: 290 });
        this.linki.attr('line/stroke', 'black');

        this.linkj.target({ x: 500, y: 240 });
        this.linkj.source({ x: 500, y: 290 });
        this.linkj.attr('line/stroke', 'orange');

        this.current_step = 12;
    }

    status13() {
        this.text1.attr('label/text', 'i==j => *j = pivotkey \n\n 第一趟排序结束');
        this.rect00.attr("label/text", "27");
        this.rect01.attr("label/text", "38");
        this.rect02.attr("label/text", "13");
        this.rect03.attr("label/text", "49");
        this.rect04.attr("label/text", "76");
        this.rect05.attr("label/text", "97");
        this.rect06.attr("label/text", "65");
        this.rect07.attr("label/text", "49");

        this.rect00.attr("body/fill", 'white');
        this.rect01.attr("body/fill", 'white');
        this.rect02.attr("body/fill", 'white');
        this.rect03.attr("body/fill", 'lightblue');
        this.rect04.attr("body/fill", 'white');
        this.rect05.attr("body/fill", 'white');
        this.rect06.attr("body/fill", 'white');
        this.rect07.attr("body/fill", 'white');

        this.linki.target({ x: 440, y: 240 });
        this.linki.source({ x: 440, y: 290 });
        this.linki.attr('line/stroke', 'black');

        this.linkj.target({ x: 440, y: 300 });
        this.linkj.source({ x: 440, y: 350 });
        this.linkj.attr('line/stroke', 'orange');

        this.current_step = 13;
    }

    status14() {
        this.text1.attr('label/text', 'pivotkey = 27 \n\n 第二趟排序开始');
        this.rect00.attr("label/text", "27");
        this.rect01.attr("label/text", "38");
        this.rect02.attr("label/text", "13");
        this.rect03.attr("label/text", "49");
        this.rect04.attr("label/text", "76");
        this.rect05.attr("label/text", "97");
        this.rect06.attr("label/text", "65");
        this.rect07.attr("label/text", "49");

        this.rect00.attr("body/fill", 'white');
        this.rect01.attr("body/fill", 'white');
        this.rect02.attr("body/fill", 'white');
        this.rect03.attr("body/fill", 'lightblue');
        this.rect04.attr("body/fill", 'white');
        this.rect05.attr("body/fill", 'white');
        this.rect06.attr("body/fill", 'white');
        this.rect07.attr("body/fill", 'white');

        this.linki.target({ x: 260, y: 240 });
        this.linki.source({ x: 260, y: 290 });
        this.linki.attr('line/stroke', 'black');

        this.linkj.target({ x: 380, y: 240 });
        this.linkj.source({ x: 380, y: 290 });
        this.linkj.attr('line/stroke', 'orange');

        this.current_step = 14;
    }

    status15() {
        this.text1.attr('label/text', 'pivotkey = 27 \n\n 第二趟排序');
        this.rect00.attr("label/text", "13");
        this.rect01.attr("label/text", "38");
        this.rect02.attr("label/text", " ");
        this.rect03.attr("label/text", "49");
        this.rect04.attr("label/text", "76");
        this.rect05.attr("label/text", "97");
        this.rect06.attr("label/text", "65");
        this.rect07.attr("label/text", "49");

        this.rect00.attr("body/fill", 'orange');
        this.rect01.attr("body/fill", 'white');
        this.rect02.attr("body/fill", 'white');
        this.rect03.attr("body/fill", 'lightblue');
        this.rect04.attr("body/fill", 'white');
        this.rect05.attr("body/fill", 'white');
        this.rect06.attr("body/fill", 'white');
        this.rect07.attr("body/fill", 'white');

        this.linki.target({ x: 260, y: 240 });
        this.linki.source({ x: 260, y: 290 });
        this.linki.attr('line/stroke', 'black');

        this.linkj.target({ x: 380, y: 240 });
        this.linkj.source({ x: 380, y: 290 });
        this.linkj.attr('line/stroke', 'orange');

        this.current_step = 15;
    }

    status16() {
        this.text1.attr('label/text', 'pivotkey = 27 \n\n 第二趟排序');
        this.rect00.attr("label/text", "13");
        this.rect01.attr("label/text", "38");
        this.rect02.attr("label/text", " ");
        this.rect03.attr("label/text", "49");
        this.rect04.attr("label/text", "76");
        this.rect05.attr("label/text", "97");
        this.rect06.attr("label/text", "65");
        this.rect07.attr("label/text", "49");

        this.rect00.attr("body/fill", 'white');
        this.rect01.attr("body/fill", 'white');
        this.rect02.attr("body/fill", 'white');
        this.rect03.attr("body/fill", 'lightblue');
        this.rect04.attr("body/fill", 'white');
        this.rect05.attr("body/fill", 'white');
        this.rect06.attr("body/fill", 'white');
        this.rect07.attr("body/fill", 'white');

        this.linki.target({ x: 320, y: 240 });
        this.linki.source({ x: 320, y: 290 });
        this.linki.attr('line/stroke', 'orange');

        this.linkj.target({ x: 380, y: 240 });
        this.linkj.source({ x: 380, y: 290 });
        this.linkj.attr('line/stroke', 'black');

        this.current_step = 16;
    }

    status17() {
        this.text1.attr('label/text', 'pivotkey = 27 \n\n 第二趟排序');
        this.rect00.attr("label/text", "13");
        this.rect01.attr("label/text", " ");
        this.rect02.attr("label/text", "38");
        this.rect03.attr("label/text", "49");
        this.rect04.attr("label/text", "76");
        this.rect05.attr("label/text", "97");
        this.rect06.attr("label/text", "65");
        this.rect07.attr("label/text", "49");

        this.rect00.attr("body/fill", 'white');
        this.rect01.attr("body/fill", 'white');
        this.rect02.attr("body/fill", 'orange');
        this.rect03.attr("body/fill", 'lightblue');
        this.rect04.attr("body/fill", 'white');
        this.rect05.attr("body/fill", 'white');
        this.rect06.attr("body/fill", 'white');
        this.rect07.attr("body/fill", 'white');

        this.linki.target({ x: 320, y: 240 });
        this.linki.source({ x: 320, y: 290 });
        this.linki.attr('line/stroke', 'orange');

        this.linkj.target({ x: 380, y: 240 });
        this.linkj.source({ x: 380, y: 290 });
        this.linkj.attr('line/stroke', 'black');

        this.current_step = 17;
    }

    status18() {
        this.text1.attr('label/text', 'i==j => *j = pivotkey \n\n 第二趟排序结束');
        this.rect00.attr("label/text", "13");
        this.rect01.attr("label/text", "27");
        this.rect02.attr("label/text", "38");
        this.rect03.attr("label/text", "49");
        this.rect04.attr("label/text", "76");
        this.rect05.attr("label/text", "97");
        this.rect06.attr("label/text", "65");
        this.rect07.attr("label/text", "49");

        this.rect00.attr("body/fill", 'white');
        this.rect01.attr("body/fill", 'lightblue');
        this.rect02.attr("body/fill", 'white');
        this.rect03.attr("body/fill", 'lightblue');
        this.rect04.attr("body/fill", 'white');
        this.rect05.attr("body/fill", 'white');
        this.rect06.attr("body/fill", 'white');
        this.rect07.attr("body/fill", 'white');

        this.linki.target({ x: 320, y: 240 });
        this.linki.source({ x: 320, y: 290 });
        this.linki.attr('line/stroke', 'black');

        this.linkj.target({ x: 320, y: 300 });
        this.linkj.source({ x: 320, y: 350 });
        this.linkj.attr('line/stroke', 'orange');

        this.current_step = 18;
    }

    status19() {
        this.text1.attr('label/text', 'i==j\n\n 第三趟排序结束');
        this.rect00.attr("label/text", "13");
        this.rect01.attr("label/text", "27");
        this.rect02.attr("label/text", "38");
        this.rect03.attr("label/text", "49");
        this.rect04.attr("label/text", "76");
        this.rect05.attr("label/text", "97");
        this.rect06.attr("label/text", "65");
        this.rect07.attr("label/text", "49");

        this.rect00.attr("body/fill", 'lightblue');
        this.rect01.attr("body/fill", 'lightblue');
        this.rect02.attr("body/fill", 'white');
        this.rect03.attr("body/fill", 'lightblue');
        this.rect04.attr("body/fill", 'white');
        this.rect05.attr("body/fill", 'white');
        this.rect06.attr("body/fill", 'white');
        this.rect07.attr("body/fill", 'white');

        this.linki.target({ x: 260, y: 240 });
        this.linki.source({ x: 260, y: 290 });
        this.linki.attr('line/stroke', 'black');

        this.linkj.target({ x: 260, y: 300 });
        this.linkj.source({ x: 260, y: 350 });
        this.linkj.attr('line/stroke', 'orange');

        this.current_step = 19;
    }

    status20() {
        this.text1.attr('label/text', 'i==j\n\n 第四趟排序结束');
        this.rect00.attr("label/text", "13");
        this.rect01.attr("label/text", "27");
        this.rect02.attr("label/text", "38");
        this.rect03.attr("label/text", "49");
        this.rect04.attr("label/text", "76");
        this.rect05.attr("label/text", "97");
        this.rect06.attr("label/text", "65");
        this.rect07.attr("label/text", "49");

        this.rect00.attr("body/fill", 'lightblue');
        this.rect01.attr("body/fill", 'lightblue');
        this.rect02.attr("body/fill", 'lightblue');
        this.rect03.attr("body/fill", 'lightblue');
        this.rect04.attr("body/fill", 'white');
        this.rect05.attr("body/fill", 'white');
        this.rect06.attr("body/fill", 'white');
        this.rect07.attr("body/fill", 'white');

        this.linki.target({ x: 380, y: 240 });
        this.linki.source({ x: 380, y: 290 });
        this.linki.attr('line/stroke', 'black');

        this.linkj.target({ x: 380, y: 300 });
        this.linkj.source({ x: 380, y: 350 });
        this.linkj.attr('line/stroke', 'orange');

        this.current_step = 20;
    }

    status21() {
        this.text1.attr('label/text', 'pivotkey = 76 \n\n 第五趟排序开始');
        this.rect00.attr("label/text", "13");
        this.rect01.attr("label/text", "27");
        this.rect02.attr("label/text", "38");
        this.rect03.attr("label/text", "49");
        this.rect04.attr("label/text", "76");
        this.rect05.attr("label/text", "97");
        this.rect06.attr("label/text", "65");
        this.rect07.attr("label/text", "49");

        this.rect00.attr("body/fill", 'lightblue');
        this.rect01.attr("body/fill", 'lightblue');
        this.rect02.attr("body/fill", 'lightblue');
        this.rect03.attr("body/fill", 'lightblue');
        this.rect04.attr("body/fill", 'white');
        this.rect05.attr("body/fill", 'white');
        this.rect06.attr("body/fill", 'white');
        this.rect07.attr("body/fill", 'white');

        this.linki.target({ x: 500, y: 240 });
        this.linki.source({ x: 500, y: 290 });
        this.linki.attr('line/stroke', 'black');

        this.linkj.target({ x: 680, y: 240 });
        this.linkj.source({ x: 680, y: 290 });
        this.linkj.attr('line/stroke', 'orange');

        this.current_step = 21;
    }

    status22() {
        this.text1.attr('label/text', 'pivotkey = 76 \n\n 第五趟排序');
        this.rect00.attr("label/text", "13");
        this.rect01.attr("label/text", "27");
        this.rect02.attr("label/text", "38");
        this.rect03.attr("label/text", "49");
        this.rect04.attr("label/text", "49");
        this.rect05.attr("label/text", "97");
        this.rect06.attr("label/text", "65");
        this.rect07.attr("label/text", " ");

        this.rect00.attr("body/fill", 'lightblue');
        this.rect01.attr("body/fill", 'lightblue');
        this.rect02.attr("body/fill", 'lightblue');
        this.rect03.attr("body/fill", 'lightblue');
        this.rect04.attr("body/fill", 'orange');
        this.rect05.attr("body/fill", 'white');
        this.rect06.attr("body/fill", 'white');
        this.rect07.attr("body/fill", 'white');

        this.linki.target({ x: 500, y: 240 });
        this.linki.source({ x: 500, y: 290 });
        this.linki.attr('line/stroke', 'black');

        this.linkj.target({ x: 680, y: 240 });
        this.linkj.source({ x: 680, y: 290 });
        this.linkj.attr('line/stroke', 'orange');

        this.current_step = 22;
    }

    status23() {
        this.text1.attr('label/text', 'pivotkey = 76 \n\n 第五趟排序');
        this.rect00.attr("label/text", "13");
        this.rect01.attr("label/text", "27");
        this.rect02.attr("label/text", "38");
        this.rect03.attr("label/text", "49");
        this.rect04.attr("label/text", "49");
        this.rect05.attr("label/text", "97");
        this.rect06.attr("label/text", "65");
        this.rect07.attr("label/text", " ");

        this.rect00.attr("body/fill", 'lightblue');
        this.rect01.attr("body/fill", 'lightblue');
        this.rect02.attr("body/fill", 'lightblue');
        this.rect03.attr("body/fill", 'lightblue');
        this.rect04.attr("body/fill", 'white');
        this.rect05.attr("body/fill", 'white');
        this.rect06.attr("body/fill", 'white');
        this.rect07.attr("body/fill", 'white');

        this.linki.target({ x: 560, y: 240 });
        this.linki.source({ x: 560, y: 290 });
        this.linki.attr('line/stroke', 'orange');

        this.linkj.target({ x: 680, y: 240 });
        this.linkj.source({ x: 680, y: 290 });
        this.linkj.attr('line/stroke', 'black');

        this.current_step = 23;
    }
    status24() {
        this.text1.attr('label/text', 'pivotkey = 76 \n\n 第五趟排序');
        this.rect00.attr("label/text", "13");
        this.rect01.attr("label/text", "27");
        this.rect02.attr("label/text", "38");
        this.rect03.attr("label/text", "49");
        this.rect04.attr("label/text", "49");
        this.rect05.attr("label/text", " ");
        this.rect06.attr("label/text", "65");
        this.rect07.attr("label/text", "97");

        this.rect00.attr("body/fill", 'lightblue');
        this.rect01.attr("body/fill", 'lightblue');
        this.rect02.attr("body/fill", 'lightblue');
        this.rect03.attr("body/fill", 'lightblue');
        this.rect04.attr("body/fill", 'white');
        this.rect05.attr("body/fill", 'white');
        this.rect06.attr("body/fill", 'white');
        this.rect07.attr("body/fill", 'orange');

        this.linki.target({ x: 560, y: 240 });
        this.linki.source({ x: 560, y: 290 });
        this.linki.attr('line/stroke', 'orange');

        this.linkj.target({ x: 680, y: 240 });
        this.linkj.source({ x: 680, y: 290 });
        this.linkj.attr('line/stroke', 'black');

        this.current_step = 24;
    }

    status25() {
        this.text1.attr('label/text', 'pivotkey = 76 \n\n 第五趟排序');
        this.rect00.attr("label/text", "13");
        this.rect01.attr("label/text", "27");
        this.rect02.attr("label/text", "38");
        this.rect03.attr("label/text", "49");
        this.rect04.attr("label/text", "49");
        this.rect05.attr("label/text", " ");
        this.rect06.attr("label/text", "65");
        this.rect07.attr("label/text", "97");

        this.rect00.attr("body/fill", 'lightblue');
        this.rect01.attr("body/fill", 'lightblue');
        this.rect02.attr("body/fill", 'lightblue');
        this.rect03.attr("body/fill", 'lightblue');
        this.rect04.attr("body/fill", 'white');
        this.rect05.attr("body/fill", 'white');
        this.rect06.attr("body/fill", 'white');
        this.rect07.attr("body/fill", 'white');

        this.linki.target({ x: 560, y: 240 });
        this.linki.source({ x: 560, y: 290 });
        this.linki.attr('line/stroke', 'black');

        this.linkj.target({ x: 620, y: 240 });
        this.linkj.source({ x: 620, y: 290 });
        this.linkj.attr('line/stroke', 'orange');

        this.current_step = 25;
    }
    status26() {
        this.text1.attr('label/text', 'pivotkey = 76 \n\n 第五趟排序');
        this.rect00.attr("label/text", "13");
        this.rect01.attr("label/text", "27");
        this.rect02.attr("label/text", "38");
        this.rect03.attr("label/text", "49");
        this.rect04.attr("label/text", "49");
        this.rect05.attr("label/text", "65");
        this.rect06.attr("label/text", " ");
        this.rect07.attr("label/text", "97");

        this.rect00.attr("body/fill", 'lightblue');
        this.rect01.attr("body/fill", 'lightblue');
        this.rect02.attr("body/fill", 'lightblue');
        this.rect03.attr("body/fill", 'lightblue');
        this.rect04.attr("body/fill", 'white');
        this.rect05.attr("body/fill", 'orange');
        this.rect06.attr("body/fill", 'white');
        this.rect07.attr("body/fill", 'white');

        this.linki.target({ x: 560, y: 240 });
        this.linki.source({ x: 560, y: 290 });
        this.linki.attr('line/stroke', 'black');

        this.linkj.target({ x: 620, y: 240 });
        this.linkj.source({ x: 620, y: 290 });
        this.linkj.attr('line/stroke', 'orange');

        this.current_step = 26;
    }
    status27() {
        this.text1.attr('label/text', 'i==j => *j = pivotkey \n\n 第五趟排序结束');
        this.rect00.attr("label/text", "13");
        this.rect01.attr("label/text", "27");
        this.rect02.attr("label/text", "38");
        this.rect03.attr("label/text", "49");
        this.rect04.attr("label/text", "49");
        this.rect05.attr("label/text", "65");
        this.rect06.attr("label/text", "76");
        this.rect07.attr("label/text", "97");

        this.rect00.attr("body/fill", 'lightblue');
        this.rect01.attr("body/fill", 'lightblue');
        this.rect02.attr("body/fill", 'lightblue');
        this.rect03.attr("body/fill", 'lightblue');
        this.rect04.attr("body/fill", 'white');
        this.rect05.attr("body/fill", 'white');
        this.rect06.attr("body/fill", 'lightblue');
        this.rect07.attr("body/fill", 'white');

        this.linki.target({ x: 620, y: 300 });
        this.linki.source({ x: 620, y: 350 });
        this.linki.attr('line/stroke', 'orange');

        this.linkj.target({ x: 620, y: 240 });
        this.linkj.source({ x: 620, y: 290 });
        this.linkj.attr('line/stroke', 'black');

        this.current_step = 27;
    }

    status28() {
        this.text1.attr('label/text', 'pivotkey = 49 \n\n 第六趟排序开始');
        this.rect00.attr("label/text", "13");
        this.rect01.attr("label/text", "27");
        this.rect02.attr("label/text", "38");
        this.rect03.attr("label/text", "49");
        this.rect04.attr("label/text", "49");
        this.rect05.attr("label/text", "65");
        this.rect06.attr("label/text", "76");
        this.rect07.attr("label/text", "97");

        this.rect00.attr("body/fill", 'lightblue');
        this.rect01.attr("body/fill", 'lightblue');
        this.rect02.attr("body/fill", 'lightblue');
        this.rect03.attr("body/fill", 'lightblue');
        this.rect04.attr("body/fill", 'white');
        this.rect05.attr("body/fill", 'white');
        this.rect06.attr("body/fill", 'lightblue');
        this.rect07.attr("body/fill", 'white');

        this.linki.target({ x: 500, y: 240 });
        this.linki.source({ x: 500, y: 290 });
        this.linki.attr('line/stroke', 'black');

        this.linkj.target({ x: 560, y: 240 });
        this.linkj.source({ x: 560, y: 290 });
        this.linkj.attr('line/stroke', 'orange');

        this.current_step = 28;
    }

    status29() {
        this.text1.attr('label/text', 'i==j => *j = pivotkey \n\n 第六趟排序结束');
        this.rect00.attr("label/text", "13");
        this.rect01.attr("label/text", "27");
        this.rect02.attr("label/text", "38");
        this.rect03.attr("label/text", "49");
        this.rect04.attr("label/text", "49");
        this.rect05.attr("label/text", "65");
        this.rect06.attr("label/text", "76");
        this.rect07.attr("label/text", "97");

        this.rect00.attr("body/fill", 'lightblue');
        this.rect01.attr("body/fill", 'lightblue');
        this.rect02.attr("body/fill", 'lightblue');
        this.rect03.attr("body/fill", 'lightblue');
        this.rect04.attr("body/fill", 'lightblue');
        this.rect05.attr("body/fill", 'white');
        this.rect06.attr("body/fill", 'lightblue');
        this.rect07.attr("body/fill", 'white');

        this.linki.target({ x: 500, y: 240 });
        this.linki.source({ x: 500, y: 290 });
        this.linki.attr('line/stroke', 'black');

        this.linkj.target({ x: 500, y: 300 });
        this.linkj.source({ x: 500, y: 350 });
        this.linkj.attr('line/stroke', 'orange');

        this.current_step = 29;
    }

    status30() {
        this.text1.attr('label/text', 'i==j ');
        this.rect00.attr("label/text", "13");
        this.rect01.attr("label/text", "27");
        this.rect02.attr("label/text", "38");
        this.rect03.attr("label/text", "49");
        this.rect04.attr("label/text", "49");
        this.rect05.attr("label/text", "65");
        this.rect06.attr("label/text", "76");
        this.rect07.attr("label/text", "97");

        this.rect00.attr("body/fill", 'lightblue');
        this.rect01.attr("body/fill", 'lightblue');
        this.rect02.attr("body/fill", 'lightblue');
        this.rect03.attr("body/fill", 'lightblue');
        this.rect04.attr("body/fill", 'lightblue');
        this.rect05.attr("body/fill", 'lightblue');
        this.rect06.attr("body/fill", 'lightblue');
        this.rect07.attr("body/fill", 'white');

        this.linki.target({ x: 560, y: 240 });
        this.linki.source({ x: 560, y: 290 });
        this.linki.attr('line/stroke', 'black');

        this.linkj.target({ x: 560, y: 300 });
        this.linkj.source({ x: 560, y: 350 });
        this.linkj.attr('line/stroke', 'orange');

        this.current_step = 30;
    }

    status31() {
        this.text1.attr('label/text', 'i==j ');
        this.rect00.attr("label/text", "13");
        this.rect01.attr("label/text", "27");
        this.rect02.attr("label/text", "38");
        this.rect03.attr("label/text", "49");
        this.rect04.attr("label/text", "49");
        this.rect05.attr("label/text", "65");
        this.rect06.attr("label/text", "76");
        this.rect07.attr("label/text", "97");

        this.rect00.attr("body/fill", 'lightblue');
        this.rect01.attr("body/fill", 'lightblue');
        this.rect02.attr("body/fill", 'lightblue');
        this.rect03.attr("body/fill", 'lightblue');
        this.rect04.attr("body/fill", 'lightblue');
        this.rect05.attr("body/fill", 'lightblue');
        this.rect06.attr("body/fill", 'lightblue');
        this.rect07.attr("body/fill", 'lightblue');

        this.linki.target({ x: 680, y: 240 });
        this.linki.source({ x: 680, y: 290 });
        this.linki.attr('line/stroke', 'black');
        this.linki.addTo(this.jt_graph);

        this.linkj.target({ x: 680, y: 300 });
        this.linkj.source({ x: 680, y: 350 });
        this.linkj.attr('line/stroke', 'orange');
        this.linkj.addTo(this.jt_graph);

        this.current_step = 31;
    }

    status32() {
        this.text1.attr('label/text', ' 排序已完成！');
        this.rect00.attr("label/text", "13");
        this.rect01.attr("label/text", "27");
        this.rect02.attr("label/text", "38");
        this.rect03.attr("label/text", "49");
        this.rect04.attr("label/text", "49");
        this.rect05.attr("label/text", "65");
        this.rect06.attr("label/text", "76");
        this.rect07.attr("label/text", "97");

        this.rect00.attr("body/fill", 'lightblue');
        this.rect01.attr("body/fill", 'lightblue');
        this.rect02.attr("body/fill", 'lightblue');
        this.rect03.attr("body/fill", 'lightblue');
        this.rect04.attr("body/fill", 'lightblue');
        this.rect05.attr("body/fill", 'lightblue');
        this.rect06.attr("body/fill", 'lightblue');
        this.rect07.attr("body/fill", 'lightblue');

        this.linki.remove();

        this.linkj.remove();

        this.current_step = 32;
    }

    changeStatus(n) {
        switch (n) {
            case 1:
                this.status1();
                break;
            case 2:
                this.status2();
                break;
            case 3:
                this.status3();
                break;
            case 4:
                this.status4();
                break;
            case 5:
                this.status5();
                break;
            case 6:
                this.status6();
                break;
            case 7:
                this.status7();
                break;
            case 8:
                this.status8();
                break;
            case 9:
                this.status9();
                break;
            case 10:
                this.status10();
                break;
            case 11:
                this.status11();
                break;
            case 12:
                this.status12();
                break;
            case 13:
                this.status13();
                break;
            case 14:
                this.status14();
                break;
            case 15:
                this.status15();
                break;
            case 16:
                this.status16();
                break;
            case 17:
                this.status17();
                break;
            case 18:
                this.status18();
                break;
            case 19:
                this.status19();
                break;
            case 20:
                this.status20();
                break;
            case 21:
                this.status21();
                break;
            case 22:
                this.status22();
                break;
            case 23:
                this.status23();
                break;
            case 24:
                this.status24();
                break;
            case 25:
                this.status25();
                break;
            case 26:
                this.status26();
                break;
            case 27:
                this.status27();
                break;
            case 28:
                this.status28();
                break;
            case 29:
                this.status29();
                break;
            case 30:
                this.status30();
                break;
            case 31:
                this.status31();
                break;
            case 32:
                this.status32();
                break;
        }
    }

    constructor(idOfPaperElement) {
        super(32, 1, idOfPaperElement, 0)
        this.creaJointJs();
    }
}

let quickSort = new QuickSort("paper5")
// quickSort.changeStatus(32);