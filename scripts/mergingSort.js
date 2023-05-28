class MeringSort extends Base {

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
                text: '',
                fill: 'black'
            }
        });
        this.text1.addTo(this.jt_graph);

        this.rect00 = new joint.shapes.standard.Rectangle();
        this.rect00.position(170, 180);
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
        this.rect01.position(230, 180);
        this.rect01.attr("label/text", "38")
        this.rect01.addTo(this.jt_graph);

        this.rect02 = this.rect00.clone();
        this.rect02.position(290, 180);
        this.rect02.attr("label/text", "65")
        this.rect02.addTo(this.jt_graph);

        this.rect03 = this.rect00.clone();
        this.rect03.position(350, 180);
        this.rect03.attr("label/text", "97")
        this.rect03.addTo(this.jt_graph);

        this.rect04 = this.rect00.clone();
        this.rect04.position(410, 180);
        this.rect04.attr("label/text", "76")
        this.rect04.addTo(this.jt_graph);

        this.rect05 = this.rect00.clone();
        this.rect05.position(470, 180);
        this.rect05.attr("label/text", "13")
        this.rect05.addTo(this.jt_graph);

        this.rect06 = this.rect00.clone();
        this.rect06.position(530, 180);
        this.rect06.attr("label/text", "27")
        this.rect06.addTo(this.jt_graph);

    }


    status1() {
        this.text1.attr("label/text", "");
        this.rect00.position(170, 180);
        this.rect00.attr("label/text", "49");
        this.rect01.position(230, 180);
        this.rect01.attr("label/text", "38");
        this.rect02.position(290, 180);
        this.rect02.attr("label/text", "65");
        this.rect03.position(350, 180);
        this.rect03.attr("label/text", "97");
        this.rect04.position(410, 180);
        this.rect04.attr("label/text", "76");
        this.rect05.position(470, 180);
        this.rect05.attr("label/text", "13");
        this.rect06.position(530, 180);
        this.rect06.attr("label/text", "27");

        this.current_step = 1;
    }

    status2() {
        this.text1.attr("label/text", "初始关键字");
        this.rect00.position(170, 180);
        this.rect00.attr("label/text", "49");
        this.rect01.position(280, 180);
        this.rect01.attr("label/text", "38");
        this.rect02.position(390, 180);
        this.rect02.attr("label/text", "65");
        this.rect03.position(500, 180);
        this.rect03.attr("label/text", "97");
        this.rect04.position(610, 180);
        this.rect04.attr("label/text", "76");
        this.rect05.position(720, 180);
        this.rect05.attr("label/text", "13");
        this.rect06.position(830, 180);
        this.rect06.attr("label/text", "27");

        this.current_step = 2;
    }

    status3() {
        this.text1.attr("label/text", "第一趟归并");
        this.rect00.position(170, 180);
        this.rect00.attr("label/text", "49");
        this.rect01.position(230, 180);
        this.rect01.attr("label/text", "38");
        this.rect02.position(340, 180);
        this.rect02.attr("label/text", "65");
        this.rect03.position(400, 180);
        this.rect03.attr("label/text", "97");
        this.rect04.position(510, 180);
        this.rect04.attr("label/text", "76");
        this.rect05.position(570, 180);
        this.rect05.attr("label/text", "13");
        this.rect06.position(680, 180);
        this.rect06.attr("label/text", "27");

        this.current_step = 3;
    }
    status4() {
        this.text1.attr("label/text", "第一趟归并");
        this.rect00.position(170, 180);
        this.rect00.attr("label/text", "38");
        this.rect01.position(230, 180);
        this.rect01.attr("label/text", "49");
        this.rect02.position(340, 180);
        this.rect02.attr("label/text", "65");
        this.rect03.position(400, 180);
        this.rect03.attr("label/text", "97");
        this.rect04.position(510, 180);
        this.rect04.attr("label/text", "13");
        this.rect05.position(570, 180);
        this.rect05.attr("label/text", "76");
        this.rect06.position(680, 180);
        this.rect06.attr("label/text", "27");

        this.current_step = 4;
    }
    status5() {
        this.text1.attr("label/text", "第二趟归并");
        this.rect00.position(170, 180);
        this.rect00.attr("label/text", "38");
        this.rect01.position(230, 180);
        this.rect01.attr("label/text", "49");
        this.rect02.position(300, 180);
        this.rect02.attr("label/text", "65");
        this.rect03.position(360, 180);
        this.rect03.attr("label/text", "97");
        this.rect04.position(470, 180);
        this.rect04.attr("label/text", "13");
        this.rect05.position(530, 180);
        this.rect05.attr("label/text", "76");
        this.rect06.position(600, 180);
        this.rect06.attr("label/text", "27");

        this.current_step = 5;
    }
    status6() {
        this.text1.attr("label/text", "第二趟归并");
        this.rect00.position(170, 180);
        this.rect00.attr("label/text", "38");
        this.rect01.position(230, 180);
        this.rect01.attr("label/text", "49");
        this.rect02.position(290, 180);
        this.rect02.attr("label/text", "65");
        this.rect03.position(350, 180);
        this.rect03.attr("label/text", "97");
        this.rect04.position(470, 180);
        this.rect04.attr("label/text", "13");
        this.rect05.position(530, 180);
        this.rect05.attr("label/text", "27");
        this.rect06.position(590, 180);
        this.rect06.attr("label/text", "76");

        this.current_step = 6;
    }

    status7() {
        this.text1.attr("label/text", "第三趟归并");
        this.rect00.position(170, 180);
        this.rect00.attr("label/text", "38");
        this.rect01.position(230, 180);
        this.rect01.attr("label/text", "49");
        this.rect02.position(290, 180);
        this.rect02.attr("label/text", "65");
        this.rect03.position(350, 180);
        this.rect03.attr("label/text", "97");
        this.rect04.position(420, 180);
        this.rect04.attr("label/text", "13");
        this.rect05.position(480, 180);
        this.rect05.attr("label/text", "27");
        this.rect06.position(540, 180);
        this.rect06.attr("label/text", "76");

        this.current_step = 7;
    }

    status8() {
        this.text1.attr("label/text", "第三趟归并\n\n排序完成");
        this.rect00.position(170, 180);
        this.rect00.attr("label/text", "13");
        this.rect01.position(230, 180);
        this.rect01.attr("label/text", "27");
        this.rect02.position(290, 180);
        this.rect02.attr("label/text", "38");
        this.rect03.position(350, 180);
        this.rect03.attr("label/text", "49");
        this.rect04.position(410, 180);
        this.rect04.attr("label/text", "65");
        this.rect05.position(470, 180);
        this.rect05.attr("label/text", "76");
        this.rect06.position(530, 180);
        this.rect06.attr("label/text", "97");

        this.current_step = 8;
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
        }
    }

    constructor(idOfPaperElement) {
        super(8, 1, idOfPaperElement, 0)
        this.creaJointJs();
    }
}

let meringSort = new MeringSort("paper8");
// meringSort.changeStatus(8);