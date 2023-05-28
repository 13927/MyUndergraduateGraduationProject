
class BinarySortTree extends Base {

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
                text: '生成一个二叉排序树',
                fill: 'black'
            }
        });
        this.text1.addTo(this.jt_graph);

        this.rect00 = new joint.shapes.standard.Rectangle();
        this.rect00.position(50, 500);
        this.rect00.resize(60, 60);
        this.rect00.attr({
            body: {
                fill: 'white'
            },
            label: {
                text: '8',
                fill: 'black'
            }
        });
        this.rect00.addTo(this.jt_graph);

        this.rect01 = this.rect00.clone();
        this.rect01.position(110, 500);
        this.rect01.attr("label/text", "3")
        this.rect01.addTo(this.jt_graph);

        this.rect02 = this.rect00.clone();
        this.rect02.position(170, 500);
        this.rect02.attr("label/text", "10")
        this.rect02.addTo(this.jt_graph);

        this.rect03 = this.rect00.clone();
        this.rect03.position(230, 500);
        this.rect03.attr("label/text", "1")
        this.rect03.addTo(this.jt_graph);

        this.rect04 = this.rect00.clone();
        this.rect04.position(290, 500);
        this.rect04.attr("label/text", "6")
        this.rect04.addTo(this.jt_graph);

        this.rect05 = this.rect00.clone();
        this.rect05.position(350, 500);
        this.rect05.attr("label/text", "14")
        this.rect05.addTo(this.jt_graph);

        this.rect06 = this.rect00.clone();
        this.rect06.position(410, 500);
        this.rect06.attr("label/text", "4")
        this.rect06.addTo(this.jt_graph);

        this.rect07 = this.rect00.clone();
        this.rect07.position(470, 500);
        this.rect07.attr("label/text", "7")
        this.rect07.addTo(this.jt_graph);

        this.rect08 = this.rect00.clone();
        this.rect08.position(530, 500);
        this.rect08.attr("label/text", "13")
        this.rect08.addTo(this.jt_graph);


        this.circl01 = new joint.shapes.standard.Circle();
        this.circl01.position(550, 70);
        this.circl01.resize(40, 40);
        this.circl01.attr({
            body: {
                fill: 'white'
            },
            label: {
                text: '8',
                fill: 'black'
            }
        });
        // this.circl01.addTo(this.jt_graph);

        this.circl02 = this.circl01.clone();
        this.circl02.position(470, 150);
        this.circl02.attr('label/text', '3');
        // this.circl02.addTo(this.jt_graph);

        this.circl03 = this.circl01.clone();
        this.circl03.position(630, 150);
        this.circl03.attr('label/text', '10');
        // this.circl03.addTo(this.jt_graph);

        this.circl04 = this.circl01.clone();
        this.circl04.position(420, 230);
        this.circl04.attr('label/text', '1');
        // this.circl04.addTo(this.jt_graph);

        this.circl05 = this.circl01.clone();
        this.circl05.position(520, 230);
        this.circl05.attr('label/text', '6');
        // this.circl05.addTo(this.jt_graph);

        this.circl06 = this.circl01.clone();
        this.circl06.position(680, 230);
        this.circl06.attr('label/text', '14');
        // this.circl06.addTo(this.jt_graph);

        this.circl07 = this.circl01.clone();
        this.circl07.position(470, 310);
        this.circl07.attr('label/text', '4');
        // this.circl07.addTo(this.jt_graph);

        this.circl08 = this.circl01.clone();
        this.circl08.position(570, 310);
        this.circl08.attr('label/text', '7');
        // this.circl08.addTo(this.jt_graph);

        this.circl09 = this.circl01.clone();
        this.circl09.position(630, 310);
        this.circl09.attr('label/text', '13');
        // this.circl09.addTo(this.jt_graph);

        this.link12 = new joint.shapes.standard.Link({
            source: (this.circl01),
            target: (this.circl02),
            attrs: {
                line: {
                    stroke: "black",
                    strokeWidth: 2,
                    // strokeDasharray: '4 2',
                    sourceMarker: {
                    },
                    targetMarker: {
                        // the marker can be an arbitrary SVGElement
                        // 'type': 'circle',
                        // 'r': 0
                    }
                }
            }
        });
        // this.link12.addTo(this.jt_graph);

        this.link13 = this.link12.clone();
        this.link13.source(this.circl01);
        this.link13.target(this.circl03);
        // this.link13.addTo(this.jt_graph);

        this.link24 = this.link12.clone();
        this.link24.source(this.circl02);
        this.link24.target(this.circl04);
        // this.link24.addTo(this.jt_graph);

        this.link25 = this.link12.clone();
        this.link25.source(this.circl02);
        this.link25.target(this.circl05);
        // this.link25.addTo(this.jt_graph);

        this.link57 = this.link12.clone();
        this.link57.source(this.circl05);
        this.link57.target(this.circl07);
        // this.link57.addTo(this.jt_graph);

        this.link58 = this.link12.clone();
        this.link58.source(this.circl05);
        this.link58.target(this.circl08);
        // this.link58.addTo(this.jt_graph);

        this.link36 = this.link12.clone();
        this.link36.source(this.circl03);
        this.link36.target(this.circl06);
        // this.link36.addTo(this.jt_graph);

        this.link69 = this.link12.clone();
        this.link69.source(this.circl06);
        this.link69.target(this.circl09);
        // this.link69.addTo(this.jt_graph);


    }


    status1() {
        this.circl01.remove();
        this.circl02.remove();
        this.circl03.remove();
        this.circl04.remove();
        this.circl05.remove();
        this.circl06.remove();
        this.circl07.remove();
        this.circl08.remove();
        this.circl09.remove();

        this.rect00.attr('body/fill', 'white');
        this.rect01.attr('body/fill', 'white');
        this.rect02.attr('body/fill', 'white');
        this.rect03.attr('body/fill', 'white');
        this.rect04.attr('body/fill', 'white');
        this.rect05.attr('body/fill', 'white');
        this.rect06.attr('body/fill', 'white');
        this.rect07.attr('body/fill', 'white');
        this.rect08.attr('body/fill', 'white');

        this.current_step = 1;
    }

    status2() {
        this.rect01.attr('body/fill', 'white');
        this.circl02.remove();

        this.rect00.attr('body/fill', 'orange');
        this.circl01.addTo(this.jt_graph);
        this.circl01.attr('body/fill', 'orange');
        this.current_step = 2;
    }

    status3() {
        this.rect00.attr('body/fill', 'white');
        this.circl01.attr('body/fill', 'white');

        this.circl03.remove();
        this.rect02.attr('body/fill', 'white');


        this.circl02.addTo(this.jt_graph);
        this.rect01.attr('body/fill', 'orange');
        this.circl02.attr('body/fill', 'orange');
        this.link12.addTo(this.jt_graph);
        this.link12.attr('line/stroke', 'cyan');
        this.current_step = 3;
    }
    status4() {
        this.rect01.attr('body/fill', 'white');
        this.circl02.attr('body/fill', 'white');
        this.link12.attr('line/stroke', 'black');

        this.circl04.remove();
        this.rect03.attr('body/fill', 'white');

        this.circl03.addTo(this.jt_graph);
        this.rect02.attr('body/fill', 'orange');
        this.circl03.attr('body/fill', 'orange');
        this.link13.addTo(this.jt_graph);
        this.link13.attr('line/stroke', 'cyan');

        this.current_step = 4;
    }
    status5() {
        this.rect02.attr('body/fill', 'white');
        this.circl03.attr('body/fill', 'white');
        this.link13.attr('line/stroke', 'black');

        this.circl05.remove();
        this.rect04.attr('body/fill', 'white');


        this.circl04.addTo(this.jt_graph);
        this.rect03.attr('body/fill', 'orange');
        this.circl04.attr('body/fill', 'orange');
        this.link24.addTo(this.jt_graph);
        this.link12.attr('line/stroke', 'cyan');
        this.link24.attr('line/stroke', 'cyan');

        this.current_step = 5;
    }
    status6() {
        this.rect03.attr('body/fill', 'white');
        this.circl04.attr('body/fill', 'white');
        this.link12.attr('line/stroke', 'black');
        this.link24.attr('line/stroke', 'black');

        this.circl06.remove();
        this.rect05.attr('body/fill', 'white');
        this.link13.attr('line/stroke', 'black');



        this.circl05.addTo(this.jt_graph);
        this.rect04.attr('body/fill', 'orange');
        this.circl05.attr('body/fill', 'orange');
        this.link25.addTo(this.jt_graph);
        this.link12.attr('line/stroke', 'cyan');
        this.link25.attr('line/stroke', 'cyan');

        this.current_step = 6;
    }
    status7() {
        this.rect04.attr('body/fill', 'white');
        this.circl05.attr('body/fill', 'white');
        this.link12.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');

        this.circl07.remove();
        this.rect06.attr('body/fill', 'white');

        this.circl06.addTo(this.jt_graph);
        this.rect05.attr('body/fill', 'orange');
        this.circl06.attr('body/fill', 'orange');
        this.link36.addTo(this.jt_graph);
        this.link13.attr('line/stroke', 'cyan');
        this.link36.attr('line/stroke', 'cyan');
        this.current_step = 7;
    }
    status8() {
        this.rect05.attr('body/fill', 'white');
        this.circl06.attr('body/fill', 'white');
        this.link13.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');

        this.circl08.remove();
        this.rect07.attr('body/fill', 'white');
        this.link58.remove();


        this.circl07.addTo(this.jt_graph);
        this.rect06.attr('body/fill', 'orange');
        this.circl07.attr('body/fill', 'orange');
        this.link57.addTo(this.jt_graph);
        this.link12.attr('line/stroke', 'cyan');
        this.link25.attr('line/stroke', 'cyan');
        this.link57.attr('line/stroke', 'cyan');
        this.current_step = 8;
    }
    status9() {
        this.rect06.attr('body/fill', 'white');
        this.circl07.attr('body/fill', 'white');

        this.circl09.remove();
        this.rect08.attr('body/fill', 'white');
        this.link69.remove();
        this.link13.attr('line/stroke', 'black');
        this.link36.attr('line/stroke', 'black');


        this.circl08.addTo(this.jt_graph);
        this.rect07.attr('body/fill', 'orange');
        this.circl08.attr('body/fill', 'orange');
        this.link58.addTo(this.jt_graph);
        this.link57.attr('line/stroke', 'black');
        this.link12.attr('line/stroke', 'cyan');
        this.link25.attr('line/stroke', 'cyan');
        this.link58.attr('line/stroke', 'cyan');
        this.current_step = 9;
    }
    status10() {
        this.rect07.attr('body/fill', 'white');
        this.circl08.attr('body/fill', 'white');
        this.link12.attr('line/stroke', 'black');
        this.link25.attr('line/stroke', 'black');
        this.link58.attr('line/stroke', 'black');

        this.circl09.addTo(this.jt_graph);
        this.rect08.attr('body/fill', 'orange');
        this.circl09.attr('body/fill', 'orange');
        this.link69.addTo(this.jt_graph);
        this.link13.attr('line/stroke', 'cyan');
        this.link36.attr('line/stroke', 'cyan');
        this.link69.attr('line/stroke', 'cyan');
        this.current_step = 10;
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
        }
    }

    constructor(idOfPaperElement) {
        super(10, 1, idOfPaperElement, 0)
        this.creaJointJs();
    }
}

let binarySortTree = new BinarySortTree("paper4")
// binarySortTree.changeStatus(1);
// binarySortTree.changeStatus(2);
// binarySortTree.changeStatus(3);
// binarySortTree.changeStatus(4);
// binarySortTree.changeStatus(5);
// binarySortTree.changeStatus(6);
// binarySortTree.changeStatus(7);
// binarySortTree.changeStatus(8);
// binarySortTree.changeStatus(9);
// binarySortTree.changeStatus(10);
