class BinarySearch extends Base {

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
                text: '查找 key = 21 \n\nmid = (low+high)/2 \n\n mid ?= key',
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
                text: '05',
                fill: 'black'
            }
        });
        this.rect00.addTo(this.jt_graph);

        this.rect01 = this.rect00.clone();
        this.rect01.position(230, 180);
        this.rect01.attr("label/text", "13")
        this.rect01.addTo(this.jt_graph);

        this.rect02 = this.rect00.clone();
        this.rect02.position(290, 180);
        this.rect02.attr("label/text", "19")
        this.rect02.addTo(this.jt_graph);

        this.rect03 = this.rect00.clone();
        this.rect03.position(350, 180);
        this.rect03.attr("label/text", "21")
        this.rect03.addTo(this.jt_graph);

        this.rect04 = this.rect00.clone();
        this.rect04.position(410, 180);
        this.rect04.attr("label/text", "37")
        this.rect04.addTo(this.jt_graph);

        this.rect05 = this.rect00.clone();
        this.rect05.position(470, 180);
        this.rect05.attr("label/text", "56")
        this.rect05.addTo(this.jt_graph);

        this.rect06 = this.rect00.clone();
        this.rect06.position(530, 180);
        this.rect06.attr("label/text", "64")
        this.rect06.addTo(this.jt_graph);

        this.rect07 = this.rect00.clone();
        this.rect07.position(590, 180);
        this.rect07.attr("label/text", "64")
        this.rect07.addTo(this.jt_graph);

        this.rect08 = this.rect00.clone();
        this.rect08.position(650, 180);
        this.rect08.attr("label/text", "75")
        this.rect08.addTo(this.jt_graph);

        this.rect09 = this.rect00.clone();
        this.rect09.position(710, 180);
        this.rect09.attr("label/text", "80")
        this.rect09.addTo(this.jt_graph);

        this.rect10 = this.rect00.clone();
        this.rect10.position(770, 180);
        this.rect10.attr("label/text", "88")
        this.rect10.addTo(this.jt_graph);

        this.rect11 = this.rect00.clone();
        this.rect11.position(830, 180);
        this.rect11.attr("label/text", "92")
        this.rect11.addTo(this.jt_graph);

        this.linkM = new joint.shapes.standard.Link({
            source: {x:500, y:500},
            target: {x:500, y:550},
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
        this.linkM.labels([{
            attrs: {
                text: {
                    text: 'mid',
                    // fill: "orange"
                }

            }
        }]);
        // this.linkM.addTo(this.jt_graph);

        this.linkL = new joint.shapes.standard.Link({
            source: {x:500, y:500},
            target: {x:500, y:550},
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
        this.linkL.labels([{
            attrs: {
                text: {
                    text: 'low',
                    // fill: "orange"
                }

            }
        }]);

        this.linkH = new joint.shapes.standard.Link({
            source: {x:500, y:500},
            target: {x:500, y:550},
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
        this.linkH.labels([{
            attrs: {
                text: {
                    text: 'high',
                    // fill: "orange"
                }

            }
        }]);

    }


    status1() {
        this.linkM.remove();
        this.linkL.remove();
        this.linkH.remove();
        this.linkL.source({x:200, y:310});
        this.linkL.target({x:200, y:240});
        this.linkL.addTo(this.jt_graph);
        this.linkH.target({x:860, y:240});
        this.linkH.source({x:860, y:310});
        this.linkH.addTo(this.jt_graph);

        this.current_step = 1;
    }

    status2() {
        this.linkL.source({x:200, y:310});
        this.linkL.target({x:200, y:240});
        this.linkL.attr('line/stroke', 'black');
        this.linkL.addTo(this.jt_graph);
        this.linkH.target({x:860, y:240});
        this.linkH.source({x:860, y:310});
        this.linkH.attr('line/stroke', 'black');
        this.linkH.addTo(this.jt_graph);
        this.linkM.source({x:500, y:310});
        this.linkM.target({x:500, y:240});
        this.linkM.attr('line/stroke', 'orange');
        this.linkM.addTo(this.jt_graph);

        this.current_step = 2;
    }

    status3() {
        this.linkL.source({x:200, y:310});
        this.linkL.target({x:200, y:240});
        this.linkL.attr('line/stroke', 'black');
        this.linkL.addTo(this.jt_graph);
        this.linkH.target({x:440, y:240});
        this.linkH.source({x:440, y:310});
        this.linkH.attr('line/stroke', 'orange');
        this.linkH.addTo(this.jt_graph);
        this.linkM.source({x:500, y:310});
        this.linkM.target({x:500, y:240});
        this.linkM.attr('line/stroke', 'black');
        this.linkM.addTo(this.jt_graph);

        this.current_step = 3;
    }
    status4() {
        this.linkL.source({x:200, y:310});
        this.linkL.target({x:200, y:240});
        this.linkL.attr('line/stroke', 'black');
        this.linkL.addTo(this.jt_graph);
        this.linkH.target({x:440, y:240});
        this.linkH.source({x:440, y:310});
        this.linkH.attr('line/stroke', 'black');
        this.linkH.addTo(this.jt_graph);
        this.linkM.source({x:320, y:310});
        this.linkM.target({x:320, y:240});
        this.linkM.attr('line/stroke', 'orange');
        this.linkM.addTo(this.jt_graph);

        this.current_step = 4;
    }
    status5() {
        this.linkL.source({x:380, y:310});
        this.linkL.target({x:380, y:240});
        this.linkL.attr('line/stroke', 'orange');
        this.linkL.addTo(this.jt_graph);
        this.linkH.target({x:440, y:240});
        this.linkH.source({x:440, y:310});
        this.linkH.attr('line/stroke', 'black');
        this.linkH.addTo(this.jt_graph);
        this.linkM.source({x:320, y:310});
        this.linkM.target({x:320, y:240});
        this.linkM.attr('line/stroke', 'black');
        this.linkM.addTo(this.jt_graph);

        this.current_step = 5;
    }
    status6() {
        this.linkL.source({x:380, y:310});
        this.linkL.target({x:380, y:240});
        this.linkL.attr('line/stroke', 'black');
        this.linkL.addTo(this.jt_graph);
        this.linkH.target({x:440, y:240});
        this.linkH.source({x:440, y:310});
        this.linkH.attr('line/stroke', 'black');
        this.linkH.addTo(this.jt_graph);
        this.linkM.source({x:380, y:390});
        this.linkM.target({x:380, y:320});
        this.linkM.attr('line/stroke', 'red');
        this.linkM.addTo(this.jt_graph);

        this.current_step = 6;
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
        }
    }

    constructor(idOfPaperElement) {
        super(6, 1, idOfPaperElement, 0)
        this.creaJointJs();
    }
}

let binarySearch = new BinarySearch("paper3");
// binarySearch.changeStatus(6);