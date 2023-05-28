class HeapSort extends Base {

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
                text: '一个小顶堆',
                fill: 'black'
            }
        });
        this.text1.addTo(this.jt_graph);

        this.circl01 = new joint.shapes.standard.Circle();
        this.circl01.position(550, 70);
        this.circl01.resize(50, 50);
        this.circl01.attr({
            body: {
                fill: 'white'
            },
            label: {
                text: '13',
                fill: 'black'
            }
        });
        this.circl01.addTo(this.jt_graph);

        this.circl02 = this.circl01.clone();
        this.circl02.position(470, 160);
        this.circl02.attr('label/text', '38');
        this.circl02.addTo(this.jt_graph);

        this.circl03 = this.circl01.clone();
        this.circl03.position(630, 160);
        this.circl03.attr('label/text', '27');
        this.circl03.addTo(this.jt_graph);

        this.circl04 = this.circl01.clone();
        this.circl04.position(430, 250);
        this.circl04.attr('label/text', '49');
        this.circl04.addTo(this.jt_graph);

        this.circl05 = this.circl01.clone();
        this.circl05.position(510, 250);
        this.circl05.attr('label/text', '76');
        this.circl05.addTo(this.jt_graph);

        this.circl06 = this.circl01.clone();
        this.circl06.position(590, 250);
        this.circl06.attr('label/text', '65');
        this.circl06.addTo(this.jt_graph);

        this.circl07 = this.circl01.clone();
        this.circl07.position(670, 250);
        this.circl07.attr('label/text', '49');
        this.circl07.addTo(this.jt_graph);

        this.circl08 = this.circl01.clone();
        this.circl08.position(400, 340);
        this.circl08.attr('label/text', '97');
        this.circl08.addTo(this.jt_graph);

        this.rect00 = new joint.shapes.standard.Rectangle();
        this.rect00.position(230, 450);
        this.rect00.resize(60, 60);
        this.rect00.attr({
            body: {
                fill: 'white'
            },
            label: {
                text: '13',
                fill: 'black'
            }
        });
        this.rect00.addTo(this.jt_graph);

        this.rect01 = this.rect00.clone();
        this.rect01.position(290, 450);
        this.rect01.attr("label/text", "38")
        this.rect01.addTo(this.jt_graph);

        this.rect02 = this.rect00.clone();
        this.rect02.position(350, 450);
        this.rect02.attr("label/text", "27")
        this.rect02.addTo(this.jt_graph);

        this.rect03 = this.rect00.clone();
        this.rect03.position(410, 450);
        this.rect03.attr("label/text", "49")
        this.rect03.addTo(this.jt_graph);

        this.rect04 = this.rect00.clone();
        this.rect04.position(470, 450);
        this.rect04.attr("label/text", "76")
        this.rect04.addTo(this.jt_graph);

        this.rect05 = this.rect00.clone();
        this.rect05.position(530, 450);
        this.rect05.attr("label/text", "65")
        this.rect05.addTo(this.jt_graph);

        this.rect06 = this.rect00.clone();
        this.rect06.position(590, 450);
        this.rect06.attr("label/text", "49")
        this.rect06.addTo(this.jt_graph);

        this.rect07 = this.rect00.clone();
        this.rect07.position(650, 450);
        this.rect07.attr("label/text", "97")
        this.rect07.addTo(this.jt_graph);


        this.link12 = new joint.shapes.standard.Link({
            source: this.circl01,
            target: this.circl02,
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
        this.link12.addTo(this.jt_graph);

        this.link13 = this.link12.clone();
        this.link13.source(this.circl01);
        this.link13.target(this.circl03);
        this.link13.addTo(this.jt_graph);

        this.link24 = this.link12.clone();
        this.link24.source(this.circl02);
        this.link24.target(this.circl04);
        this.link24.addTo(this.jt_graph);

        this.link25 = this.link12.clone();
        this.link25.source(this.circl02);
        this.link25.target(this.circl05);
        this.link25.addTo(this.jt_graph);

        this.link36 = this.link12.clone();
        this.link36.source(this.circl03);
        this.link36.target(this.circl06);
        this.link36.addTo(this.jt_graph);

        this.link37 = this.link12.clone();
        this.link37.source(this.circl03);
        this.link37.target(this.circl07);
        this.link37.addTo(this.jt_graph);

        this.link48 = this.link12.clone();
        this.link48.source(this.circl04);
        this.link48.target(this.circl08);
        this.link48.addTo(this.jt_graph);

        this.link18 = new joint.shapes.standard.Link({
            source: this.circl01,
            target: this.circl08,
            attrs: {
                line: {
                    stroke: "cyan",
                    strokeWidth: 2,
                    // strokeDasharray: '4 2',
                    sourceMarker: {
                    },
                    targetMarker: {
                        'type': 'circle',
                        'r': 0
                    }
                }
            }
        });
        this.link17 = this.link18.clone();
        this.link17.source(this.circl01);
        this.link17.target(this.circl07);

        this.link16 = this.link18.clone();
        this.link16.source(this.circl01);
        this.link16.target(this.circl06);

        this.link15 = this.link18.clone();
        this.link15.source(this.circl01);
        this.link15.target(this.circl05);

        this.link14 = this.link18.clone();
        this.link14.source(this.circl01);
        this.link14.target(this.circl04);

    }


    status1() {
        this.text1.attr('label/text', '一个小顶堆');
        this.rect00.attr("label/text", "13")
        this.rect01.attr("label/text", "38")
        this.rect02.attr("label/text", "27")
        this.rect03.attr("label/text", "49")
        this.rect04.attr("label/text", "76")
        this.rect05.attr("label/text", "65")
        this.rect06.attr("label/text", "49")
        this.rect07.attr("label/text", "97")

        this.rect00.attr('body/fill', 'white');
        this.rect01.attr('body/fill', 'white');
        this.rect02.attr('body/fill', 'white');
        this.rect03.attr('body/fill', 'white');
        this.rect04.attr('body/fill', 'white');
        this.rect05.attr('body/fill', 'white');
        this.rect06.attr('body/fill', 'white');
        this.rect07.attr('body/fill', 'white');

        this.circl01.attr('label/text', '13');
        this.circl02.attr('label/text', '38');
        this.circl03.attr('label/text', '27');
        this.circl04.attr('label/text', '49');
        this.circl05.attr('label/text', '76');
        this.circl06.attr('label/text', '65');
        this.circl07.attr('label/text', '49');
        this.circl08.attr('label/text', '97');

        this.circl01.attr('body/fill', 'white');
        this.circl02.attr('body/fill', 'white');
        this.circl03.attr('body/fill', 'white');
        this.circl04.attr('body/fill', 'white');
        this.circl05.attr('body/fill', 'white');
        this.circl06.attr('body/fill', 'white');
        this.circl07.attr('body/fill', 'white');
        this.circl08.attr('body/fill', 'white');

        this.link12.attr('line/stroke', 'black');
        this.link13.attr('line/stroke', 'black');
        this.link24.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'black');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.addTo(this.jt_graph);
        this.link24.addTo(this.jt_graph);
        this.link25.addTo(this.jt_graph);
        this.link36.addTo(this.jt_graph);
        this.link37.addTo(this.jt_graph);
        this.link48.addTo(this.jt_graph);

        this.link14.remove();
        this.link15.remove();
        this.link16.remove();
        this.link17.remove();
        this.link18.remove();

        this.current_step = 1;
    }

    status2() {
        this.text1.attr('label/text', '调整堆顶');
        this.rect00.attr("label/text", "13")
        this.rect01.attr("label/text", "38")
        this.rect02.attr("label/text", "27")
        this.rect03.attr("label/text", "49")
        this.rect04.attr("label/text", "76")
        this.rect05.attr("label/text", "65")
        this.rect06.attr("label/text", "49")
        this.rect07.attr("label/text", "97")

        this.rect00.attr('body/fill', 'cyan');
        this.rect01.attr('body/fill', 'white');
        this.rect02.attr('body/fill', 'white');
        this.rect03.attr('body/fill', 'white');
        this.rect04.attr('body/fill', 'white');
        this.rect05.attr('body/fill', 'white');
        this.rect06.attr('body/fill', 'white');
        this.rect07.attr('body/fill', 'cyan');

        this.circl01.attr('label/text', '13');
        this.circl02.attr('label/text', '38');
        this.circl03.attr('label/text', '27');
        this.circl04.attr('label/text', '49');
        this.circl05.attr('label/text', '76');
        this.circl06.attr('label/text', '65');
        this.circl07.attr('label/text', '49');
        this.circl08.attr('label/text', '97');

        this.circl01.attr('body/fill', 'cyan');
        this.circl02.attr('body/fill', 'white');
        this.circl03.attr('body/fill', 'white');
        this.circl04.attr('body/fill', 'white');
        this.circl05.attr('body/fill', 'white');
        this.circl06.attr('body/fill', 'white');
        this.circl07.attr('body/fill', 'white');
        this.circl08.attr('body/fill', 'cyan');

        this.link12.attr('line/stroke', 'black');
        this.link13.attr('line/stroke', 'black');
        this.link24.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'black');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.addTo(this.jt_graph);
        this.link24.addTo(this.jt_graph);
        this.link25.addTo(this.jt_graph);
        this.link36.addTo(this.jt_graph);
        this.link37.addTo(this.jt_graph);
        this.link48.addTo(this.jt_graph);

        this.link18.addTo(this.jt_graph);

        this.current_step = 2;
    }

    status3() {
        this.text1.attr('label/text', '调整堆顶');
        this.rect00.attr("label/text", "97")
        this.rect01.attr("label/text", "38")
        this.rect02.attr("label/text", "27")
        this.rect03.attr("label/text", "49")
        this.rect04.attr("label/text", "76")
        this.rect05.attr("label/text", "65")
        this.rect06.attr("label/text", "49")
        this.rect07.attr("label/text", "13")

        this.rect00.attr('body/fill', 'cyan');
        this.rect01.attr('body/fill', 'white');
        this.rect02.attr('body/fill', 'white');
        this.rect03.attr('body/fill', 'white');
        this.rect04.attr('body/fill', 'white');
        this.rect05.attr('body/fill', 'white');
        this.rect06.attr('body/fill', 'white');
        this.rect07.attr('body/fill', 'orange');

        this.circl01.attr('label/text', '97');
        this.circl02.attr('label/text', '38');
        this.circl03.attr('label/text', '27');
        this.circl04.attr('label/text', '49');
        this.circl05.attr('label/text', '76');
        this.circl06.attr('label/text', '65');
        this.circl07.attr('label/text', '49');
        this.circl08.attr('label/text', '13');

        this.circl01.attr('body/fill', 'cyan');
        this.circl02.attr('body/fill', 'white');
        this.circl03.attr('body/fill', 'white');
        this.circl04.attr('body/fill', 'white');
        this.circl05.attr('body/fill', 'white');
        this.circl06.attr('body/fill', 'white');
        this.circl07.attr('body/fill', 'white');
        this.circl08.attr('body/fill', 'orange');

        this.link12.attr('line/stroke', 'black');
        this.link13.attr('line/stroke', 'black');
        this.link24.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'black');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.addTo(this.jt_graph);
        this.link24.addTo(this.jt_graph);
        this.link25.addTo(this.jt_graph);
        this.link36.addTo(this.jt_graph);
        this.link37.addTo(this.jt_graph);
        this.link48.addTo(this.jt_graph);

        this.link18.addTo(this.jt_graph);

        this.current_step = 3;
    }

    status4() {
        this.text1.attr('label/text', '向下“筛选”');
        this.rect00.attr("label/text", "97")
        this.rect01.attr("label/text", "38")
        this.rect02.attr("label/text", "27")
        this.rect03.attr("label/text", "49")
        this.rect04.attr("label/text", "76")
        this.rect05.attr("label/text", "65")
        this.rect06.attr("label/text", "49")
        this.rect07.attr("label/text", "13")

        this.rect00.attr('body/fill', 'cyan');
        this.rect01.attr('body/fill', 'white');
        this.rect02.attr('body/fill', 'cyan');
        this.rect03.attr('body/fill', 'white');
        this.rect04.attr('body/fill', 'white');
        this.rect05.attr('body/fill', 'white');
        this.rect06.attr('body/fill', 'white');
        this.rect07.attr('body/fill', 'orange');

        this.circl01.attr('label/text', '97');
        this.circl02.attr('label/text', '38');
        this.circl03.attr('label/text', '27');
        this.circl04.attr('label/text', '49');
        this.circl05.attr('label/text', '76');
        this.circl06.attr('label/text', '65');
        this.circl07.attr('label/text', '49');
        this.circl08.attr('label/text', '13');

        this.circl01.attr('body/fill', 'cyan');
        this.circl02.attr('body/fill', 'white');
        this.circl03.attr('body/fill', 'cyan');
        this.circl04.attr('body/fill', 'white');
        this.circl05.attr('body/fill', 'white');
        this.circl06.attr('body/fill', 'white');
        this.circl07.attr('body/fill', 'white');
        this.circl08.attr('body/fill', 'orange');

        this.link12.attr('line/stroke', 'black');
        this.link13.attr('line/stroke', 'cyan');
        this.link24.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'black');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.addTo(this.jt_graph);
        this.link24.addTo(this.jt_graph);
        this.link25.addTo(this.jt_graph);
        this.link36.addTo(this.jt_graph);
        this.link37.addTo(this.jt_graph);
        this.link48.remove()

        this.link18.remove();

        this.current_step = 4;
    }

    status5() {
        this.text1.attr('label/text', '向下“筛选”');
        this.rect00.attr("label/text", "27")
        this.rect01.attr("label/text", "38")
        this.rect02.attr("label/text", "97")
        this.rect03.attr("label/text", "49")
        this.rect04.attr("label/text", "76")
        this.rect05.attr("label/text", "65")
        this.rect06.attr("label/text", "49")
        this.rect07.attr("label/text", "13")

        this.rect00.attr('body/fill', 'cyan');
        this.rect01.attr('body/fill', 'white');
        this.rect02.attr('body/fill', 'cyan');
        this.rect03.attr('body/fill', 'white');
        this.rect04.attr('body/fill', 'white');
        this.rect05.attr('body/fill', 'white');
        this.rect06.attr('body/fill', 'white');
        this.rect07.attr('body/fill', 'orange');

        this.circl01.attr('label/text', '27');
        this.circl02.attr('label/text', '38');
        this.circl03.attr('label/text', '97');
        this.circl04.attr('label/text', '49');
        this.circl05.attr('label/text', '76');
        this.circl06.attr('label/text', '65');
        this.circl07.attr('label/text', '49');
        this.circl08.attr('label/text', '13');

        this.circl01.attr('body/fill', 'cyan');
        this.circl02.attr('body/fill', 'white');
        this.circl03.attr('body/fill', 'cyan');
        this.circl04.attr('body/fill', 'white');
        this.circl05.attr('body/fill', 'white');
        this.circl06.attr('body/fill', 'white');
        this.circl07.attr('body/fill', 'white');
        this.circl08.attr('body/fill', 'orange');

        this.link12.attr('line/stroke', 'black');
        this.link13.attr('line/stroke', 'cyan');
        this.link24.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'black');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.addTo(this.jt_graph);
        this.link24.addTo(this.jt_graph);
        this.link25.addTo(this.jt_graph);
        this.link36.addTo(this.jt_graph);
        this.link37.addTo(this.jt_graph);
        this.link48.remove()

        this.link18.remove();

        this.current_step = 5;
    }

    status6() {
        this.text1.attr('label/text', '向下“筛选”');
        this.rect00.attr("label/text", "27")
        this.rect01.attr("label/text", "38")
        this.rect02.attr("label/text", "97")
        this.rect03.attr("label/text", "49")
        this.rect04.attr("label/text", "76")
        this.rect05.attr("label/text", "65")
        this.rect06.attr("label/text", "49")
        this.rect07.attr("label/text", "13")

        this.rect00.attr('body/fill', 'white');
        this.rect01.attr('body/fill', 'white');
        this.rect02.attr('body/fill', 'cyan');
        this.rect03.attr('body/fill', 'white');
        this.rect04.attr('body/fill', 'white');
        this.rect05.attr('body/fill', 'white');
        this.rect06.attr('body/fill', 'cyan');
        this.rect07.attr('body/fill', 'orange');

        this.circl01.attr('label/text', '27');
        this.circl02.attr('label/text', '38');
        this.circl03.attr('label/text', '97');
        this.circl04.attr('label/text', '49');
        this.circl05.attr('label/text', '76');
        this.circl06.attr('label/text', '65');
        this.circl07.attr('label/text', '49');
        this.circl08.attr('label/text', '13');

        this.circl01.attr('body/fill', 'white');
        this.circl02.attr('body/fill', 'white');
        this.circl03.attr('body/fill', 'cyan');
        this.circl04.attr('body/fill', 'white');
        this.circl05.attr('body/fill', 'white');
        this.circl06.attr('body/fill', 'white');
        this.circl07.attr('body/fill', 'cyan');
        this.circl08.attr('body/fill', 'orange');

        this.link12.attr('line/stroke', 'black');
        this.link13.attr('line/stroke', 'black');
        this.link24.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'cyan');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.addTo(this.jt_graph);
        this.link24.addTo(this.jt_graph);
        this.link25.addTo(this.jt_graph);
        this.link36.addTo(this.jt_graph);
        this.link37.addTo(this.jt_graph);
        this.link48.remove();

        this.link18.remove();

        this.current_step = 6;
    }

    status7() {
        this.text1.attr('label/text', '向下“筛选”');
        this.rect00.attr("label/text", "27")
        this.rect01.attr("label/text", "38")
        this.rect02.attr("label/text", "49")
        this.rect03.attr("label/text", "49")
        this.rect04.attr("label/text", "76")
        this.rect05.attr("label/text", "65")
        this.rect06.attr("label/text", "97")
        this.rect07.attr("label/text", "13")

        this.rect00.attr('body/fill', 'white');
        this.rect01.attr('body/fill', 'white');
        this.rect02.attr('body/fill', 'cyan');
        this.rect03.attr('body/fill', 'white');
        this.rect04.attr('body/fill', 'white');
        this.rect05.attr('body/fill', 'white');
        this.rect06.attr('body/fill', 'cyan');
        this.rect07.attr('body/fill', 'orange');

        this.circl01.attr('label/text', '27');
        this.circl02.attr('label/text', '38');
        this.circl03.attr('label/text', '49');
        this.circl04.attr('label/text', '49');
        this.circl05.attr('label/text', '76');
        this.circl06.attr('label/text', '65');
        this.circl07.attr('label/text', '97');
        this.circl08.attr('label/text', '13');

        this.circl01.attr('body/fill', 'white');
        this.circl02.attr('body/fill', 'white');
        this.circl03.attr('body/fill', 'cyan');
        this.circl04.attr('body/fill', 'white');
        this.circl05.attr('body/fill', 'white');
        this.circl06.attr('body/fill', 'white');
        this.circl07.attr('body/fill', 'cyan');
        this.circl08.attr('body/fill', 'orange');

        this.link12.attr('line/stroke', 'black');
        this.link13.attr('line/stroke', 'black');
        this.link24.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'cyan');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.addTo(this.jt_graph);
        this.link24.addTo(this.jt_graph);
        this.link25.addTo(this.jt_graph);
        this.link36.addTo(this.jt_graph);
        this.link37.addTo(this.jt_graph);
        this.link48.remove()

        this.link18.remove();
        this.link17.remove();

        this.current_step = 7;
    }

    status8() {
        this.text1.attr('label/text', '调整堆顶');
        this.rect00.attr("label/text", "27")
        this.rect01.attr("label/text", "38")
        this.rect02.attr("label/text", "49")
        this.rect03.attr("label/text", "49")
        this.rect04.attr("label/text", "76")
        this.rect05.attr("label/text", "65")
        this.rect06.attr("label/text", "97")
        this.rect07.attr("label/text", "13")

        this.rect00.attr('body/fill', 'cyan');
        this.rect01.attr('body/fill', 'white');
        this.rect02.attr('body/fill', 'white');
        this.rect03.attr('body/fill', 'white');
        this.rect04.attr('body/fill', 'white');
        this.rect05.attr('body/fill', 'white');
        this.rect06.attr('body/fill', 'cyan');
        this.rect07.attr('body/fill', 'orange');

        this.circl01.attr('label/text', '27');
        this.circl02.attr('label/text', '38');
        this.circl03.attr('label/text', '49');
        this.circl04.attr('label/text', '49');
        this.circl05.attr('label/text', '76');
        this.circl06.attr('label/text', '65');
        this.circl07.attr('label/text', '97');
        this.circl08.attr('label/text', '13');

        this.circl01.attr('body/fill', 'cyan');
        this.circl02.attr('body/fill', 'white');
        this.circl03.attr('body/fill', 'white');
        this.circl04.attr('body/fill', 'white');
        this.circl05.attr('body/fill', 'white');
        this.circl06.attr('body/fill', 'white');
        this.circl07.attr('body/fill', 'cyan');
        this.circl08.attr('body/fill', 'orange');

        this.link12.attr('line/stroke', 'black');
        this.link13.attr('line/stroke', 'black');
        this.link24.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'black');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.addTo(this.jt_graph);
        this.link24.addTo(this.jt_graph);
        this.link25.addTo(this.jt_graph);
        this.link36.addTo(this.jt_graph);
        this.link37.addTo(this.jt_graph);
        this.link48.remove();

        this.link18.remove();

        this.link17.addTo(this.jt_graph);

        this.current_step = 8;
    }

    status9() {
        this.text1.attr('label/text', '调整堆顶');
        this.rect00.attr("label/text", "97")
        this.rect01.attr("label/text", "38")
        this.rect02.attr("label/text", "49")
        this.rect03.attr("label/text", "49")
        this.rect04.attr("label/text", "76")
        this.rect05.attr("label/text", "65")
        this.rect06.attr("label/text", "27")
        this.rect07.attr("label/text", "13")

        this.rect00.attr('body/fill', 'cyan');
        this.rect01.attr('body/fill', 'white');
        this.rect02.attr('body/fill', 'white');
        this.rect03.attr('body/fill', 'white');
        this.rect04.attr('body/fill', 'white');
        this.rect05.attr('body/fill', 'white');
        this.rect06.attr('body/fill', 'orange');
        this.rect07.attr('body/fill', 'orange');

        this.circl01.attr('label/text', '97');
        this.circl02.attr('label/text', '38');
        this.circl03.attr('label/text', '49');
        this.circl04.attr('label/text', '49');
        this.circl05.attr('label/text', '76');
        this.circl06.attr('label/text', '65');
        this.circl07.attr('label/text', '27');
        this.circl08.attr('label/text', '13');

        this.circl01.attr('body/fill', 'cyan');
        this.circl02.attr('body/fill', 'white');
        this.circl03.attr('body/fill', 'white');
        this.circl04.attr('body/fill', 'white');
        this.circl05.attr('body/fill', 'white');
        this.circl06.attr('body/fill', 'white');
        this.circl07.attr('body/fill', 'orange');
        this.circl08.attr('body/fill', 'orange');

        this.link12.attr('line/stroke', 'black');
        this.link13.attr('line/stroke', 'black');
        this.link24.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'black');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.addTo(this.jt_graph);
        this.link24.addTo(this.jt_graph);
        this.link25.addTo(this.jt_graph);
        this.link36.addTo(this.jt_graph);
        this.link37.addTo(this.jt_graph);
        this.link48.remove();

        this.link18.remove();

        this.link17.addTo(this.jt_graph);

        this.current_step = 9;
    }

    status10() {
        this.text1.attr('label/text', '向下“筛选”');
        this.rect00.attr("label/text", "97")
        this.rect01.attr("label/text", "38")
        this.rect02.attr("label/text", "49")
        this.rect03.attr("label/text", "49")
        this.rect04.attr("label/text", "76")
        this.rect05.attr("label/text", "65")
        this.rect06.attr("label/text", "27")
        this.rect07.attr("label/text", "13")

        this.rect00.attr('body/fill', 'cyan');
        this.rect01.attr('body/fill', 'cyan');
        this.rect02.attr('body/fill', 'white');
        this.rect03.attr('body/fill', 'white');
        this.rect04.attr('body/fill', 'white');
        this.rect05.attr('body/fill', 'white');
        this.rect06.attr('body/fill', 'orange');
        this.rect07.attr('body/fill', 'orange');

        this.circl01.attr('label/text', '97');
        this.circl02.attr('label/text', '38');
        this.circl03.attr('label/text', '49');
        this.circl04.attr('label/text', '49');
        this.circl05.attr('label/text', '76');
        this.circl06.attr('label/text', '65');
        this.circl07.attr('label/text', '27');
        this.circl08.attr('label/text', '13');

        this.circl01.attr('body/fill', 'cyan');
        this.circl02.attr('body/fill', 'cyan');
        this.circl03.attr('body/fill', 'white');
        this.circl04.attr('body/fill', 'white');
        this.circl05.attr('body/fill', 'white');
        this.circl06.attr('body/fill', 'white');
        this.circl07.attr('body/fill', 'orange');
        this.circl08.attr('body/fill', 'orange');

        this.link12.attr('line/stroke', 'cyan');
        this.link13.attr('line/stroke', 'black');
        this.link24.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'black');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.addTo(this.jt_graph);
        this.link24.addTo(this.jt_graph);
        this.link25.addTo(this.jt_graph);
        this.link36.addTo(this.jt_graph);
        this.link37.remove();
        this.link48.remove();

        this.link18.remove();
        this.link17.remove();

        this.current_step = 10;
    }

    status11() {
        this.text1.attr('label/text', '向下“筛选”');
        this.rect00.attr("label/text", "38")
        this.rect01.attr("label/text", "97")
        this.rect02.attr("label/text", "49")
        this.rect03.attr("label/text", "49")
        this.rect04.attr("label/text", "76")
        this.rect05.attr("label/text", "65")
        this.rect06.attr("label/text", "27")
        this.rect07.attr("label/text", "13")

        this.rect00.attr('body/fill', 'cyan');
        this.rect01.attr('body/fill', 'cyan');
        this.rect02.attr('body/fill', 'white');
        this.rect03.attr('body/fill', 'white');
        this.rect04.attr('body/fill', 'white');
        this.rect05.attr('body/fill', 'white');
        this.rect06.attr('body/fill', 'orange');
        this.rect07.attr('body/fill', 'orange');

        this.circl01.attr('label/text', '38');
        this.circl02.attr('label/text', '97');
        this.circl03.attr('label/text', '49');
        this.circl04.attr('label/text', '49');
        this.circl05.attr('label/text', '76');
        this.circl06.attr('label/text', '65');
        this.circl07.attr('label/text', '27');
        this.circl08.attr('label/text', '13');

        this.circl01.attr('body/fill', 'cyan');
        this.circl02.attr('body/fill', 'cyan');
        this.circl03.attr('body/fill', 'white');
        this.circl04.attr('body/fill', 'white');
        this.circl05.attr('body/fill', 'white');
        this.circl06.attr('body/fill', 'white');
        this.circl07.attr('body/fill', 'orange');
        this.circl08.attr('body/fill', 'orange');

        this.link12.attr('line/stroke', 'cyan');
        this.link13.attr('line/stroke', 'black');
        this.link24.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'black');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.addTo(this.jt_graph);
        this.link24.addTo(this.jt_graph);
        this.link25.addTo(this.jt_graph);
        this.link36.addTo(this.jt_graph);
        this.link37.remove();
        this.link48.remove();

        this.link18.remove();
        this.link17.remove();

        this.current_step = 11;
    }

    status12() {
        this.text1.attr('label/text', '向下“筛选”');
        this.rect00.attr("label/text", "38")
        this.rect01.attr("label/text", "97")
        this.rect02.attr("label/text", "49")
        this.rect03.attr("label/text", "49")
        this.rect04.attr("label/text", "76")
        this.rect05.attr("label/text", "65")
        this.rect06.attr("label/text", "27")
        this.rect07.attr("label/text", "13")

        this.rect00.attr('body/fill', 'white');
        this.rect01.attr('body/fill', 'cyan');
        this.rect02.attr('body/fill', 'white');
        this.rect03.attr('body/fill', 'cyan');
        this.rect04.attr('body/fill', 'white');
        this.rect05.attr('body/fill', 'white');
        this.rect06.attr('body/fill', 'orange');
        this.rect07.attr('body/fill', 'orange');

        this.circl01.attr('label/text', '38');
        this.circl02.attr('label/text', '97');
        this.circl03.attr('label/text', '49');
        this.circl04.attr('label/text', '49');
        this.circl05.attr('label/text', '76');
        this.circl06.attr('label/text', '65');
        this.circl07.attr('label/text', '27');
        this.circl08.attr('label/text', '13');

        this.circl01.attr('body/fill', 'white');
        this.circl02.attr('body/fill', 'cyan');
        this.circl03.attr('body/fill', 'white');
        this.circl04.attr('body/fill', 'cyan');
        this.circl05.attr('body/fill', 'white');
        this.circl06.attr('body/fill', 'white');
        this.circl07.attr('body/fill', 'orange');
        this.circl08.attr('body/fill', 'orange');

        this.link12.attr('line/stroke', 'black');
        this.link13.attr('line/stroke', 'black');
        this.link24.attr('line/stroke', 'cyan');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'black');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.addTo(this.jt_graph);
        this.link24.addTo(this.jt_graph);
        this.link25.addTo(this.jt_graph);
        this.link36.addTo(this.jt_graph);
        this.link37.remove();
        this.link48.remove();

        this.link18.remove();
        this.link17.remove();

        this.current_step = 12;
    }

    status13() {
        this.text1.attr('label/text', '向下“筛选”');
        this.rect00.attr("label/text", "38")
        this.rect01.attr("label/text", "49")
        this.rect02.attr("label/text", "49")
        this.rect03.attr("label/text", "97")
        this.rect04.attr("label/text", "76")
        this.rect05.attr("label/text", "65")
        this.rect06.attr("label/text", "27")
        this.rect07.attr("label/text", "13")

        this.rect00.attr('body/fill', 'white');
        this.rect01.attr('body/fill', 'cyan');
        this.rect02.attr('body/fill', 'white');
        this.rect03.attr('body/fill', 'cyan');
        this.rect04.attr('body/fill', 'white');
        this.rect05.attr('body/fill', 'white');
        this.rect06.attr('body/fill', 'orange');
        this.rect07.attr('body/fill', 'orange');

        this.circl01.attr('label/text', '38');
        this.circl02.attr('label/text', '49');
        this.circl03.attr('label/text', '49');
        this.circl04.attr('label/text', '97');
        this.circl05.attr('label/text', '76');
        this.circl06.attr('label/text', '65');
        this.circl07.attr('label/text', '27');
        this.circl08.attr('label/text', '13');

        this.circl01.attr('body/fill', 'white');
        this.circl02.attr('body/fill', 'cyan');
        this.circl03.attr('body/fill', 'white');
        this.circl04.attr('body/fill', 'cyan');
        this.circl05.attr('body/fill', 'white');
        this.circl06.attr('body/fill', 'white');
        this.circl07.attr('body/fill', 'orange');
        this.circl08.attr('body/fill', 'orange');

        this.link12.attr('line/stroke', 'black');
        this.link13.attr('line/stroke', 'black');
        this.link24.attr('line/stroke', 'cyan');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'black');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.addTo(this.jt_graph);
        this.link24.addTo(this.jt_graph);
        this.link25.addTo(this.jt_graph);
        this.link36.addTo(this.jt_graph);
        this.link37.remove();
        this.link48.remove();

        this.link18.remove();
        this.link17.remove();
        this.link16.remove();

        this.current_step = 13;
    }

    status14() {
        this.text1.attr('label/text', '调整堆顶');
        this.rect00.attr("label/text", "38")
        this.rect01.attr("label/text", "49")
        this.rect02.attr("label/text", "49")
        this.rect03.attr("label/text", "97")
        this.rect04.attr("label/text", "76")
        this.rect05.attr("label/text", "65")
        this.rect06.attr("label/text", "27")
        this.rect07.attr("label/text", "13")

        this.rect00.attr('body/fill', 'cyan');
        this.rect01.attr('body/fill', 'white');
        this.rect02.attr('body/fill', 'white');
        this.rect03.attr('body/fill', 'white');
        this.rect04.attr('body/fill', 'white');
        this.rect05.attr('body/fill', 'cyan');
        this.rect06.attr('body/fill', 'orange');
        this.rect07.attr('body/fill', 'orange');

        this.circl01.attr('label/text', '38');
        this.circl02.attr('label/text', '49');
        this.circl03.attr('label/text', '49');
        this.circl04.attr('label/text', '97');
        this.circl05.attr('label/text', '76');
        this.circl06.attr('label/text', '65');
        this.circl07.attr('label/text', '27');
        this.circl08.attr('label/text', '13');

        this.circl01.attr('body/fill', 'cyan');
        this.circl02.attr('body/fill', 'white');
        this.circl03.attr('body/fill', 'white');
        this.circl04.attr('body/fill', 'white');
        this.circl05.attr('body/fill', 'white');
        this.circl06.attr('body/fill', 'cyan');
        this.circl07.attr('body/fill', 'orange');
        this.circl08.attr('body/fill', 'orange');

        this.link12.attr('line/stroke', 'black');
        this.link13.attr('line/stroke', 'black');
        this.link24.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'black');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.addTo(this.jt_graph);
        this.link24.addTo(this.jt_graph);
        this.link25.addTo(this.jt_graph);
        this.link36.addTo(this.jt_graph);
        this.link37.remove();
        this.link48.remove();
        this.link18.remove();
        this.link17.remove();
        this.link16.addTo(this.jt_graph);

        this.current_step = 14;
    }

    status15() {
        this.text1.attr('label/text', '调整堆顶');
        this.rect00.attr("label/text", "65")
        this.rect01.attr("label/text", "49")
        this.rect02.attr("label/text", "49")
        this.rect03.attr("label/text", "97")
        this.rect04.attr("label/text", "76")
        this.rect05.attr("label/text", "38")
        this.rect06.attr("label/text", "27")
        this.rect07.attr("label/text", "13")

        this.rect00.attr('body/fill', 'cyan');
        this.rect01.attr('body/fill', 'white');
        this.rect02.attr('body/fill', 'white');
        this.rect03.attr('body/fill', 'white');
        this.rect04.attr('body/fill', 'white');
        this.rect05.attr('body/fill', 'orange');
        this.rect06.attr('body/fill', 'orange');
        this.rect07.attr('body/fill', 'orange');

        this.circl01.attr('label/text', '65');
        this.circl02.attr('label/text', '49');
        this.circl03.attr('label/text', '49');
        this.circl04.attr('label/text', '97');
        this.circl05.attr('label/text', '76');
        this.circl06.attr('label/text', '38');
        this.circl07.attr('label/text', '27');
        this.circl08.attr('label/text', '13');

        this.circl01.attr('body/fill', 'cyan');
        this.circl02.attr('body/fill', 'white');
        this.circl03.attr('body/fill', 'white');
        this.circl04.attr('body/fill', 'white');
        this.circl05.attr('body/fill', 'white');
        this.circl06.attr('body/fill', 'orange');
        this.circl07.attr('body/fill', 'orange');
        this.circl08.attr('body/fill', 'orange');

        this.link12.attr('line/stroke', 'black');
        this.link13.attr('line/stroke', 'black');
        this.link24.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'black');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.addTo(this.jt_graph);
        this.link24.addTo(this.jt_graph);
        this.link25.addTo(this.jt_graph);
        this.link36.addTo(this.jt_graph);
        this.link37.remove();
        this.link48.remove();
        this.link18.remove();
        this.link17.remove();
        this.link16.addTo(this.jt_graph);

        this.current_step = 15;
    }

    status16() {
        this.text1.attr('label/text', '向下“筛选”');
        this.rect00.attr("label/text", "65")
        this.rect01.attr("label/text", "49")
        this.rect02.attr("label/text", "49")
        this.rect03.attr("label/text", "97")
        this.rect04.attr("label/text", "76")
        this.rect05.attr("label/text", "38")
        this.rect06.attr("label/text", "27")
        this.rect07.attr("label/text", "13")

        this.rect00.attr('body/fill', 'cyan');
        this.rect01.attr('body/fill', 'cyan');
        this.rect02.attr('body/fill', 'white');
        this.rect03.attr('body/fill', 'white');
        this.rect04.attr('body/fill', 'white');
        this.rect05.attr('body/fill', 'orange');
        this.rect06.attr('body/fill', 'orange');
        this.rect07.attr('body/fill', 'orange');

        this.circl01.attr('label/text', '65');
        this.circl02.attr('label/text', '49');
        this.circl03.attr('label/text', '49');
        this.circl04.attr('label/text', '97');
        this.circl05.attr('label/text', '76');
        this.circl06.attr('label/text', '38');
        this.circl07.attr('label/text', '27');
        this.circl08.attr('label/text', '13');

        this.circl01.attr('body/fill', 'cyan');
        this.circl02.attr('body/fill', 'cyan');
        this.circl03.attr('body/fill', 'white');
        this.circl04.attr('body/fill', 'white');
        this.circl05.attr('body/fill', 'white');
        this.circl06.attr('body/fill', 'orange');
        this.circl07.attr('body/fill', 'orange');
        this.circl08.attr('body/fill', 'orange');

        this.link12.attr('line/stroke', 'cyan');
        this.link13.attr('line/stroke', 'black');
        this.link24.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'black');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.addTo(this.jt_graph);
        this.link24.addTo(this.jt_graph);
        this.link25.addTo(this.jt_graph);
        this.link36.remove();
        this.link37.remove();
        this.link48.remove();
        this.link18.remove();
        this.link17.remove();
        this.link16.remove();

        this.current_step = 16;
    }

    status17() {
        this.text1.attr('label/text', '向下“筛选”');
        this.rect00.attr("label/text", "49")
        this.rect01.attr("label/text", "65")
        this.rect02.attr("label/text", "49")
        this.rect03.attr("label/text", "97")
        this.rect04.attr("label/text", "76")
        this.rect05.attr("label/text", "38")
        this.rect06.attr("label/text", "27")
        this.rect07.attr("label/text", "13")

        this.rect00.attr('body/fill', 'cyan');
        this.rect01.attr('body/fill', 'cyan');
        this.rect02.attr('body/fill', 'white');
        this.rect03.attr('body/fill', 'white');
        this.rect04.attr('body/fill', 'white');
        this.rect05.attr('body/fill', 'orange');
        this.rect06.attr('body/fill', 'orange');
        this.rect07.attr('body/fill', 'orange');

        this.circl01.attr('label/text', '49');
        this.circl02.attr('label/text', '65');
        this.circl03.attr('label/text', '49');
        this.circl04.attr('label/text', '97');
        this.circl05.attr('label/text', '76');
        this.circl06.attr('label/text', '38');
        this.circl07.attr('label/text', '27');
        this.circl08.attr('label/text', '13');

        this.circl01.attr('body/fill', 'cyan');
        this.circl02.attr('body/fill', 'cyan');
        this.circl03.attr('body/fill', 'white');
        this.circl04.attr('body/fill', 'white');
        this.circl05.attr('body/fill', 'white');
        this.circl06.attr('body/fill', 'orange');
        this.circl07.attr('body/fill', 'orange');
        this.circl08.attr('body/fill', 'orange');

        this.link12.attr('line/stroke', 'cyan');
        this.link13.attr('line/stroke', 'black');
        this.link24.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'black');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.addTo(this.jt_graph);
        this.link24.addTo(this.jt_graph);
        this.link25.addTo(this.jt_graph);
        this.link36.remove();
        this.link37.remove();
        this.link48.remove();
        this.link18.remove();
        this.link17.remove();
        this.link16.remove();

        this.current_step = 17;
    }

    status18() {
        this.text1.attr('label/text', '向下“筛选”');
        this.rect00.attr("label/text", "49")
        this.rect01.attr("label/text", "65")
        this.rect02.attr("label/text", "49")
        this.rect03.attr("label/text", "97")
        this.rect04.attr("label/text", "76")
        this.rect05.attr("label/text", "38")
        this.rect06.attr("label/text", "27")
        this.rect07.attr("label/text", "13")

        this.rect00.attr('body/fill', 'white');
        this.rect01.attr('body/fill', 'cyan');
        this.rect02.attr('body/fill', 'white');
        this.rect03.attr('body/fill', 'white');
        this.rect04.attr('body/fill', 'white');
        this.rect05.attr('body/fill', 'orange');
        this.rect06.attr('body/fill', 'orange');
        this.rect07.attr('body/fill', 'orange');

        this.circl01.attr('label/text', '49');
        this.circl02.attr('label/text', '65');
        this.circl03.attr('label/text', '49');
        this.circl04.attr('label/text', '97');
        this.circl05.attr('label/text', '76');
        this.circl06.attr('label/text', '38');
        this.circl07.attr('label/text', '27');
        this.circl08.attr('label/text', '13');

        this.circl01.attr('body/fill', 'white');
        this.circl02.attr('body/fill', 'cyan');
        this.circl03.attr('body/fill', 'white');
        this.circl04.attr('body/fill', 'white');
        this.circl05.attr('body/fill', 'white');
        this.circl06.attr('body/fill', 'orange');
        this.circl07.attr('body/fill', 'orange');
        this.circl08.attr('body/fill', 'orange');

        this.link12.attr('line/stroke', 'black');
        this.link13.attr('line/stroke', 'black');
        this.link24.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'black');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.addTo(this.jt_graph);
        this.link24.addTo(this.jt_graph);
        this.link25.addTo(this.jt_graph);
        this.link36.remove();
        this.link37.remove();
        this.link48.remove();
        this.link18.remove();
        this.link17.remove();
        this.link16.remove();
        this.link15.remove();

        this.current_step = 18;
    }

    status19() {
        this.text1.attr('label/text', '调整堆顶');
        this.rect00.attr("label/text", "49")
        this.rect01.attr("label/text", "65")
        this.rect02.attr("label/text", "49")
        this.rect03.attr("label/text", "97")
        this.rect04.attr("label/text", "76")
        this.rect05.attr("label/text", "38")
        this.rect06.attr("label/text", "27")
        this.rect07.attr("label/text", "13")

        this.rect00.attr('body/fill', 'cyan');
        this.rect01.attr('body/fill', 'white');
        this.rect02.attr('body/fill', 'white');
        this.rect03.attr('body/fill', 'white');
        this.rect04.attr('body/fill', 'cyan');
        this.rect05.attr('body/fill', 'orange');
        this.rect06.attr('body/fill', 'orange');
        this.rect07.attr('body/fill', 'orange');

        this.circl01.attr('label/text', '49');
        this.circl02.attr('label/text', '65');
        this.circl03.attr('label/text', '49');
        this.circl04.attr('label/text', '97');
        this.circl05.attr('label/text', '76');
        this.circl06.attr('label/text', '38');
        this.circl07.attr('label/text', '27');
        this.circl08.attr('label/text', '13');

        this.circl01.attr('body/fill', 'cyan');
        this.circl02.attr('body/fill', 'white');
        this.circl03.attr('body/fill', 'white');
        this.circl04.attr('body/fill', 'white');
        this.circl05.attr('body/fill', 'cyan');
        this.circl06.attr('body/fill', 'orange');
        this.circl07.attr('body/fill', 'orange');
        this.circl08.attr('body/fill', 'orange');

        this.link12.attr('line/stroke', 'black');
        this.link13.attr('line/stroke', 'black');
        this.link24.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'black');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.addTo(this.jt_graph);
        this.link24.addTo(this.jt_graph);
        this.link25.addTo(this.jt_graph);
        this.link36.remove();
        this.link37.remove();
        this.link48.remove();
        this.link18.remove();
        this.link17.remove();
        this.link16.remove();
        this.link15.addTo(this.jt_graph);

        this.current_step = 19;
    }

    status20() {
        this.text1.attr('label/text', '调整堆顶');
        this.rect00.attr("label/text", "76")
        this.rect01.attr("label/text", "65")
        this.rect02.attr("label/text", "49")
        this.rect03.attr("label/text", "97")
        this.rect04.attr("label/text", "49")
        this.rect05.attr("label/text", "38")
        this.rect06.attr("label/text", "27")
        this.rect07.attr("label/text", "13")

        this.rect00.attr('body/fill', 'cyan');
        this.rect01.attr('body/fill', 'white');
        this.rect02.attr('body/fill', 'white');
        this.rect03.attr('body/fill', 'white');
        this.rect04.attr('body/fill', 'orange');
        this.rect05.attr('body/fill', 'orange');
        this.rect06.attr('body/fill', 'orange');
        this.rect07.attr('body/fill', 'orange');

        this.circl01.attr('label/text', '76');
        this.circl02.attr('label/text', '65');
        this.circl03.attr('label/text', '49');
        this.circl04.attr('label/text', '97');
        this.circl05.attr('label/text', '49');
        this.circl06.attr('label/text', '38');
        this.circl07.attr('label/text', '27');
        this.circl08.attr('label/text', '13');

        this.circl01.attr('body/fill', 'cyan');
        this.circl02.attr('body/fill', 'white');
        this.circl03.attr('body/fill', 'white');
        this.circl04.attr('body/fill', 'white');
        this.circl05.attr('body/fill', 'orange');
        this.circl06.attr('body/fill', 'orange');
        this.circl07.attr('body/fill', 'orange');
        this.circl08.attr('body/fill', 'orange');

        this.link12.attr('line/stroke', 'black');
        this.link13.attr('line/stroke', 'black');
        this.link24.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'black');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.addTo(this.jt_graph);
        this.link24.addTo(this.jt_graph);
        this.link25.addTo(this.jt_graph);
        this.link36.remove();
        this.link37.remove();
        this.link48.remove();
        this.link18.remove();
        this.link17.remove();
        this.link16.remove();
        this.link15.addTo(this.jt_graph);

        this.current_step = 20;
    }

    status21() {
        this.text1.attr('label/text', '向下“筛选”');
        this.rect00.attr("label/text", "76")
        this.rect01.attr("label/text", "65")
        this.rect02.attr("label/text", "49")
        this.rect03.attr("label/text", "97")
        this.rect04.attr("label/text", "49")
        this.rect05.attr("label/text", "38")
        this.rect06.attr("label/text", "27")
        this.rect07.attr("label/text", "13")

        this.rect00.attr('body/fill', 'cyan');
        this.rect01.attr('body/fill', 'white');
        this.rect02.attr('body/fill', 'cyan');
        this.rect03.attr('body/fill', 'white');
        this.rect04.attr('body/fill', 'orange');
        this.rect05.attr('body/fill', 'orange');
        this.rect06.attr('body/fill', 'orange');
        this.rect07.attr('body/fill', 'orange');

        this.circl01.attr('label/text', '76');
        this.circl02.attr('label/text', '65');
        this.circl03.attr('label/text', '49');
        this.circl04.attr('label/text', '97');
        this.circl05.attr('label/text', '49');
        this.circl06.attr('label/text', '38');
        this.circl07.attr('label/text', '27');
        this.circl08.attr('label/text', '13');

        this.circl01.attr('body/fill', 'cyan');
        this.circl02.attr('body/fill', 'white');
        this.circl03.attr('body/fill', 'cyan');
        this.circl04.attr('body/fill', 'white');
        this.circl05.attr('body/fill', 'orange');
        this.circl06.attr('body/fill', 'orange');
        this.circl07.attr('body/fill', 'orange');
        this.circl08.attr('body/fill', 'orange');

        this.link12.attr('line/stroke', 'black');
        this.link13.attr('line/stroke', 'cyan');
        this.link24.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'black');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.addTo(this.jt_graph);
        this.link24.addTo(this.jt_graph);
        this.link25.remove();
        this.link36.remove();
        this.link37.remove();
        this.link48.remove();
        this.link18.remove();
        this.link17.remove();
        this.link16.remove();
        this.link15.remove();

        this.current_step = 21;
    }
    status22() {
        this.text1.attr('label/text', '向下“筛选”');
        this.rect00.attr("label/text", "49")
        this.rect01.attr("label/text", "65")
        this.rect02.attr("label/text", "76")
        this.rect03.attr("label/text", "97")
        this.rect04.attr("label/text", "49")
        this.rect05.attr("label/text", "38")
        this.rect06.attr("label/text", "27")
        this.rect07.attr("label/text", "13")

        this.rect00.attr('body/fill', 'cyan');
        this.rect01.attr('body/fill', 'white');
        this.rect02.attr('body/fill', 'cyan');
        this.rect03.attr('body/fill', 'white');
        this.rect04.attr('body/fill', 'orange');
        this.rect05.attr('body/fill', 'orange');
        this.rect06.attr('body/fill', 'orange');
        this.rect07.attr('body/fill', 'orange');

        this.circl01.attr('label/text', '49');
        this.circl02.attr('label/text', '65');
        this.circl03.attr('label/text', '76');
        this.circl04.attr('label/text', '97');
        this.circl05.attr('label/text', '49');
        this.circl06.attr('label/text', '38');
        this.circl07.attr('label/text', '27');
        this.circl08.attr('label/text', '13');

        this.circl01.attr('body/fill', 'cyan');
        this.circl02.attr('body/fill', 'white');
        this.circl03.attr('body/fill', 'cyan');
        this.circl04.attr('body/fill', 'white');
        this.circl05.attr('body/fill', 'orange');
        this.circl06.attr('body/fill', 'orange');
        this.circl07.attr('body/fill', 'orange');
        this.circl08.attr('body/fill', 'orange');

        this.link12.attr('line/stroke', 'black');
        this.link13.attr('line/stroke', 'cyan');
        this.link24.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'black');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.addTo(this.jt_graph);
        this.link24.addTo(this.jt_graph);
        this.link25.remove();
        this.link36.remove();
        this.link37.remove();
        this.link48.remove();
        this.link18.remove();
        this.link17.remove();
        this.link16.remove();
        this.link15.remove();
        this.link14.remove();

        this.current_step = 22;
    }

    status23() {
        this.text1.attr('label/text', '调整堆顶');
        this.rect00.attr("label/text", "49")
        this.rect01.attr("label/text", "65")
        this.rect02.attr("label/text", "76")
        this.rect03.attr("label/text", "97")
        this.rect04.attr("label/text", "49")
        this.rect05.attr("label/text", "38")
        this.rect06.attr("label/text", "27")
        this.rect07.attr("label/text", "13")

        this.rect00.attr('body/fill', 'cyan');
        this.rect01.attr('body/fill', 'white');
        this.rect02.attr('body/fill', 'white');
        this.rect03.attr('body/fill', 'cyan');
        this.rect04.attr('body/fill', 'orange');
        this.rect05.attr('body/fill', 'orange');
        this.rect06.attr('body/fill', 'orange');
        this.rect07.attr('body/fill', 'orange');

        this.circl01.attr('label/text', '49');
        this.circl02.attr('label/text', '65');
        this.circl03.attr('label/text', '76');
        this.circl04.attr('label/text', '97');
        this.circl05.attr('label/text', '49');
        this.circl06.attr('label/text', '38');
        this.circl07.attr('label/text', '27');
        this.circl08.attr('label/text', '13');

        this.circl01.attr('body/fill', 'cyan');
        this.circl02.attr('body/fill', 'white');
        this.circl03.attr('body/fill', 'white');
        this.circl04.attr('body/fill', 'cyan');
        this.circl05.attr('body/fill', 'orange');
        this.circl06.attr('body/fill', 'orange');
        this.circl07.attr('body/fill', 'orange');
        this.circl08.attr('body/fill', 'orange');

        this.link12.attr('line/stroke', 'black');
        this.link13.attr('line/stroke', 'black');
        this.link24.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'black');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.addTo(this.jt_graph);
        this.link24.addTo(this.jt_graph);
        this.link25.remove();
        this.link36.remove();
        this.link37.remove();
        this.link48.remove();
        this.link18.remove();
        this.link17.remove();
        this.link16.remove();
        this.link15.remove();
        this.link14.addTo(this.jt_graph);

        this.current_step = 23;
    }

    status24() {
        this.text1.attr('label/text', '调整堆顶');
        this.rect00.attr("label/text", "97")
        this.rect01.attr("label/text", "65")
        this.rect02.attr("label/text", "76")
        this.rect03.attr("label/text", "49")
        this.rect04.attr("label/text", "49")
        this.rect05.attr("label/text", "38")
        this.rect06.attr("label/text", "27")
        this.rect07.attr("label/text", "13")

        this.rect00.attr('body/fill', 'cyan');
        this.rect01.attr('body/fill', 'white');
        this.rect02.attr('body/fill', 'white');
        this.rect03.attr('body/fill', 'orange');
        this.rect04.attr('body/fill', 'orange');
        this.rect05.attr('body/fill', 'orange');
        this.rect06.attr('body/fill', 'orange');
        this.rect07.attr('body/fill', 'orange');

        this.circl01.attr('label/text', '97');
        this.circl02.attr('label/text', '65');
        this.circl03.attr('label/text', '76');
        this.circl04.attr('label/text', '49');
        this.circl05.attr('label/text', '49');
        this.circl06.attr('label/text', '38');
        this.circl07.attr('label/text', '27');
        this.circl08.attr('label/text', '13');

        this.circl01.attr('body/fill', 'cyan');
        this.circl02.attr('body/fill', 'white');
        this.circl03.attr('body/fill', 'white');
        this.circl04.attr('body/fill', 'orange');
        this.circl05.attr('body/fill', 'orange');
        this.circl06.attr('body/fill', 'orange');
        this.circl07.attr('body/fill', 'orange');
        this.circl08.attr('body/fill', 'orange');

        this.link12.attr('line/stroke', 'black');
        this.link13.attr('line/stroke', 'black');
        this.link24.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'black');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.addTo(this.jt_graph);
        this.link24.addTo(this.jt_graph);
        this.link25.remove();
        this.link36.remove();
        this.link37.remove();
        this.link48.remove();
        this.link18.remove();
        this.link17.remove();
        this.link16.remove();
        this.link15.remove();
        this.link14.addTo(this.jt_graph);

        this.current_step = 24;
    }

    status25() {
        this.text1.attr('label/text', '向下“筛选”');
        this.rect00.attr("label/text", "97")
        this.rect01.attr("label/text", "65")
        this.rect02.attr("label/text", "76")
        this.rect03.attr("label/text", "49")
        this.rect04.attr("label/text", "49")
        this.rect05.attr("label/text", "38")
        this.rect06.attr("label/text", "27")
        this.rect07.attr("label/text", "13")

        this.rect00.attr('body/fill', 'cyan');
        this.rect01.attr('body/fill', 'cyan');
        this.rect02.attr('body/fill', 'white');
        this.rect03.attr('body/fill', 'orange');
        this.rect04.attr('body/fill', 'orange');
        this.rect05.attr('body/fill', 'orange');
        this.rect06.attr('body/fill', 'orange');
        this.rect07.attr('body/fill', 'orange');

        this.circl01.attr('label/text', '97');
        this.circl02.attr('label/text', '65');
        this.circl03.attr('label/text', '76');
        this.circl04.attr('label/text', '49');
        this.circl05.attr('label/text', '49');
        this.circl06.attr('label/text', '38');
        this.circl07.attr('label/text', '27');
        this.circl08.attr('label/text', '13');

        this.circl01.attr('body/fill', 'cyan');
        this.circl02.attr('body/fill', 'cyan');
        this.circl03.attr('body/fill', 'white');
        this.circl04.attr('body/fill', 'orange');
        this.circl05.attr('body/fill', 'orange');
        this.circl06.attr('body/fill', 'orange');
        this.circl07.attr('body/fill', 'orange');
        this.circl08.attr('body/fill', 'orange');

        this.link12.attr('line/stroke', 'cyan');
        this.link13.attr('line/stroke', 'black');
        this.link24.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'black');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.addTo(this.jt_graph);
        this.link24.remove();
        this.link25.remove();
        this.link36.remove();
        this.link37.remove();
        this.link48.remove();
        this.link18.remove();
        this.link17.remove();
        this.link16.remove();
        this.link15.remove();
        this.link14.remove();

        this.current_step = 25;
    }

    status26() {
        this.text1.attr('label/text', '向下“筛选”');
        this.rect00.attr("label/text", "65")
        this.rect01.attr("label/text", "97")
        this.rect02.attr("label/text", "76")
        this.rect03.attr("label/text", "49")
        this.rect04.attr("label/text", "49")
        this.rect05.attr("label/text", "38")
        this.rect06.attr("label/text", "27")
        this.rect07.attr("label/text", "13")

        this.rect00.attr('body/fill', 'cyan');
        this.rect01.attr('body/fill', 'cyan');
        this.rect02.attr('body/fill', 'white');
        this.rect03.attr('body/fill', 'orange');
        this.rect04.attr('body/fill', 'orange');
        this.rect05.attr('body/fill', 'orange');
        this.rect06.attr('body/fill', 'orange');
        this.rect07.attr('body/fill', 'orange');

        this.circl01.attr('label/text', '65');
        this.circl02.attr('label/text', '97');
        this.circl03.attr('label/text', '76');
        this.circl04.attr('label/text', '49');
        this.circl05.attr('label/text', '49');
        this.circl06.attr('label/text', '38');
        this.circl07.attr('label/text', '27');
        this.circl08.attr('label/text', '13');

        this.circl01.attr('body/fill', 'cyan');
        this.circl02.attr('body/fill', 'cyan');
        this.circl03.attr('body/fill', 'white');
        this.circl04.attr('body/fill', 'orange');
        this.circl05.attr('body/fill', 'orange');
        this.circl06.attr('body/fill', 'orange');
        this.circl07.attr('body/fill', 'orange');
        this.circl08.attr('body/fill', 'orange');

        this.link12.attr('line/stroke', 'cyan');
        this.link13.attr('line/stroke', 'black');
        this.link24.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'black');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.addTo(this.jt_graph);
        this.link24.remove();
        this.link25.remove();
        this.link36.remove();
        this.link37.remove();
        this.link48.remove();
        this.link18.remove();
        this.link17.remove();
        this.link16.remove();
        this.link15.remove();
        this.link14.remove();

        this.current_step = 26;
    }

    status27() {
        this.text1.attr('label/text', '调整顶堆');
        this.rect00.attr("label/text", "65")
        this.rect01.attr("label/text", "97")
        this.rect02.attr("label/text", "76")
        this.rect03.attr("label/text", "49")
        this.rect04.attr("label/text", "49")
        this.rect05.attr("label/text", "38")
        this.rect06.attr("label/text", "27")
        this.rect07.attr("label/text", "13")

        this.rect00.attr('body/fill', 'cyan');
        this.rect01.attr('body/fill', 'white');
        this.rect02.attr('body/fill', 'cyan');
        this.rect03.attr('body/fill', 'orange');
        this.rect04.attr('body/fill', 'orange');
        this.rect05.attr('body/fill', 'orange');
        this.rect06.attr('body/fill', 'orange');
        this.rect07.attr('body/fill', 'orange');

        this.circl01.attr('label/text', '65');
        this.circl02.attr('label/text', '97');
        this.circl03.attr('label/text', '76');
        this.circl04.attr('label/text', '49');
        this.circl05.attr('label/text', '49');
        this.circl06.attr('label/text', '38');
        this.circl07.attr('label/text', '27');
        this.circl08.attr('label/text', '13');

        this.circl01.attr('body/fill', 'cyan');
        this.circl02.attr('body/fill', 'white');
        this.circl03.attr('body/fill', 'cyan');
        this.circl04.attr('body/fill', 'orange');
        this.circl05.attr('body/fill', 'orange');
        this.circl06.attr('body/fill', 'orange');
        this.circl07.attr('body/fill', 'orange');
        this.circl08.attr('body/fill', 'orange');

        this.link12.attr('line/stroke', 'black');
        this.link13.attr('line/stroke', 'cyan');
        this.link24.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'black');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.addTo(this.jt_graph);
        this.link24.remove();
        this.link25.remove();
        this.link36.remove();
        this.link37.remove();
        this.link48.remove();
        this.link18.remove();
        this.link17.remove();
        this.link16.remove();
        this.link15.remove();
        this.link14.remove();

        this.current_step = 27;
    }

    status28() {
        this.text1.attr('label/text', '调整顶堆');
        this.rect00.attr("label/text", "76")
        this.rect01.attr("label/text", "97")
        this.rect02.attr("label/text", "65")
        this.rect03.attr("label/text", "49")
        this.rect04.attr("label/text", "49")
        this.rect05.attr("label/text", "38")
        this.rect06.attr("label/text", "27")
        this.rect07.attr("label/text", "13")

        this.rect00.attr('body/fill', 'cyan');
        this.rect01.attr('body/fill', 'white');
        this.rect02.attr('body/fill', 'orange');
        this.rect03.attr('body/fill', 'orange');
        this.rect04.attr('body/fill', 'orange');
        this.rect05.attr('body/fill', 'orange');
        this.rect06.attr('body/fill', 'orange');
        this.rect07.attr('body/fill', 'orange');

        this.circl01.attr('label/text', '76');
        this.circl02.attr('label/text', '97');
        this.circl03.attr('label/text', '65');
        this.circl04.attr('label/text', '49');
        this.circl05.attr('label/text', '49');
        this.circl06.attr('label/text', '38');
        this.circl07.attr('label/text', '27');
        this.circl08.attr('label/text', '13');

        this.circl01.attr('body/fill', 'cyan');
        this.circl02.attr('body/fill', 'white');
        this.circl03.attr('body/fill', 'orange');
        this.circl04.attr('body/fill', 'orange');
        this.circl05.attr('body/fill', 'orange');
        this.circl06.attr('body/fill', 'orange');
        this.circl07.attr('body/fill', 'orange');
        this.circl08.attr('body/fill', 'orange');

        this.link12.attr('line/stroke', 'black');
        this.link13.attr('line/stroke', 'cyan');
        this.link24.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'black');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.addTo(this.jt_graph);
        this.link24.remove();
        this.link25.remove();
        this.link36.remove();
        this.link37.remove();
        this.link48.remove();
        this.link18.remove();
        this.link17.remove();
        this.link16.remove();
        this.link15.remove();
        this.link14.remove();

        this.current_step = 28;
    }

    status29() {
        this.text1.attr('label/text', '调整顶堆');
        this.rect00.attr("label/text", "76")
        this.rect01.attr("label/text", "97")
        this.rect02.attr("label/text", "65")
        this.rect03.attr("label/text", "49")
        this.rect04.attr("label/text", "49")
        this.rect05.attr("label/text", "38")
        this.rect06.attr("label/text", "27")
        this.rect07.attr("label/text", "13")

        this.rect00.attr('body/fill', 'cyan');
        this.rect01.attr('body/fill', 'cyan');
        this.rect02.attr('body/fill', 'orange');
        this.rect03.attr('body/fill', 'orange');
        this.rect04.attr('body/fill', 'orange');
        this.rect05.attr('body/fill', 'orange');
        this.rect06.attr('body/fill', 'orange');
        this.rect07.attr('body/fill', 'orange');

        this.circl01.attr('label/text', '76');
        this.circl02.attr('label/text', '97');
        this.circl03.attr('label/text', '65');
        this.circl04.attr('label/text', '49');
        this.circl05.attr('label/text', '49');
        this.circl06.attr('label/text', '38');
        this.circl07.attr('label/text', '27');
        this.circl08.attr('label/text', '13');

        this.circl01.attr('body/fill', 'cyan');
        this.circl02.attr('body/fill', 'cyan');
        this.circl03.attr('body/fill', 'orange');
        this.circl04.attr('body/fill', 'orange');
        this.circl05.attr('body/fill', 'orange');
        this.circl06.attr('body/fill', 'orange');
        this.circl07.attr('body/fill', 'orange');
        this.circl08.attr('body/fill', 'orange');

        this.link12.attr('line/stroke', 'cyan');
        this.link13.attr('line/stroke', 'black');
        this.link24.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'black');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.remove();
        this.link24.remove();
        this.link25.remove();
        this.link36.remove();
        this.link37.remove();
        this.link48.remove();
        this.link18.remove();
        this.link17.remove();
        this.link16.remove();
        this.link15.remove();
        this.link14.remove();

        this.current_step = 29;
    }

    status30() {
        this.text1.attr('label/text', '调整顶堆');
        this.rect00.attr("label/text", "97")
        this.rect01.attr("label/text", "76")
        this.rect02.attr("label/text", "65")
        this.rect03.attr("label/text", "49")
        this.rect04.attr("label/text", "49")
        this.rect05.attr("label/text", "38")
        this.rect06.attr("label/text", "27")
        this.rect07.attr("label/text", "13")

        this.rect00.attr('body/fill', 'cyan');
        this.rect01.attr('body/fill', 'cyan');
        this.rect02.attr('body/fill', 'orange');
        this.rect03.attr('body/fill', 'orange');
        this.rect04.attr('body/fill', 'orange');
        this.rect05.attr('body/fill', 'orange');
        this.rect06.attr('body/fill', 'orange');
        this.rect07.attr('body/fill', 'orange');

        this.circl01.attr('label/text', '97');
        this.circl02.attr('label/text', '76');
        this.circl03.attr('label/text', '65');
        this.circl04.attr('label/text', '49');
        this.circl05.attr('label/text', '49');
        this.circl06.attr('label/text', '38');
        this.circl07.attr('label/text', '27');
        this.circl08.attr('label/text', '13');

        this.circl01.attr('body/fill', 'cyan');
        this.circl02.attr('body/fill', 'cyan');
        this.circl03.attr('body/fill', 'orange');
        this.circl04.attr('body/fill', 'orange');
        this.circl05.attr('body/fill', 'orange');
        this.circl06.attr('body/fill', 'orange');
        this.circl07.attr('body/fill', 'orange');
        this.circl08.attr('body/fill', 'orange');

        this.link12.attr('line/stroke', 'cyan');
        this.link13.attr('line/stroke', 'black');
        this.link24.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'black');
        this.link48.attr('line/stroke', 'black');

        this.link12.addTo(this.jt_graph);
        this.link13.remove();
        this.link24.remove();
        this.link25.remove();
        this.link36.remove();
        this.link37.remove();
        this.link48.remove();
        this.link18.remove();
        this.link17.remove();
        this.link16.remove();
        this.link15.remove();
        this.link14.remove();

        this.current_step = 30;
    }

    status31() {
        this.text1.attr('label/text', '排序完成');
        this.rect00.attr("label/text", "97")
        this.rect01.attr("label/text", "76")
        this.rect02.attr("label/text", "65")
        this.rect03.attr("label/text", "49")
        this.rect04.attr("label/text", "49")
        this.rect05.attr("label/text", "38")
        this.rect06.attr("label/text", "27")
        this.rect07.attr("label/text", "13")

        this.rect00.attr('body/fill', 'orange');
        this.rect01.attr('body/fill', 'orange');
        this.rect02.attr('body/fill', 'orange');
        this.rect03.attr('body/fill', 'orange');
        this.rect04.attr('body/fill', 'orange');
        this.rect05.attr('body/fill', 'orange');
        this.rect06.attr('body/fill', 'orange');
        this.rect07.attr('body/fill', 'orange');

        this.circl01.attr('label/text', '97');
        this.circl02.attr('label/text', '76');
        this.circl03.attr('label/text', '65');
        this.circl04.attr('label/text', '49');
        this.circl05.attr('label/text', '49');
        this.circl06.attr('label/text', '38');
        this.circl07.attr('label/text', '27');
        this.circl08.attr('label/text', '13');

        this.circl01.attr('body/fill', 'orange');
        this.circl02.attr('body/fill', 'orange');
        this.circl03.attr('body/fill', 'orange');
        this.circl04.attr('body/fill', 'orange');
        this.circl05.attr('body/fill', 'orange');
        this.circl06.attr('body/fill', 'orange');
        this.circl07.attr('body/fill', 'orange');
        this.circl08.attr('body/fill', 'orange');

        this.link12.attr('line/stroke', 'cyan');
        this.link13.attr('line/stroke', 'black');
        this.link24.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');
        this.link37.attr('line/stroke', 'black');
        this.link48.attr('line/stroke', 'black');

        this.link12.remove();
        this.link13.remove();
        this.link24.remove();
        this.link25.remove();
        this.link36.remove();
        this.link37.remove();
        this.link48.remove();
        this.link18.remove();
        this.link17.remove();
        this.link16.remove();
        this.link15.remove();
        this.link14.remove();

        this.current_step = 31;
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
        }
    }

    constructor(idOfPaperElement) {
        super(31, 1, idOfPaperElement, 0)
        this.creaJointJs();
    }
}

let heapSort = new HeapSort("paper7")