class Dijkstra extends Base {

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
        this.text1.resize(240, 200);
        this.text1.attr({
            body: {
                fill: 'lightblue'
            },
            label: {
                text: 'S{                        \n\n}                     \n-----------------\nU{                        \n\n}                     ',
                fill: 'black',
            }
        });
        this.text1.addTo(this.jt_graph);

        this.rect01 = new joint.shapes.standard.Circle();
        this.rect01.position(400, 150);
        this.rect01.resize(40, 40);
        this.rect01.attr({
            body: {
                fill: 'white'
            },
            label: {
                text: 'A',
                fill: 'black'
            }
        });
        this.rect01.addTo(this.jt_graph);

        this.rect02 = this.rect01.clone();
        this.rect02.position(400, 350);
        this.rect02.attr('label/text', 'B');
        this.rect02.addTo(this.jt_graph);

        this.rect03 = this.rect01.clone();
        this.rect03.position(600, 350);
        this.rect03.attr('label/text', 'C');
        this.rect03.addTo(this.jt_graph);

        this.rect04 = this.rect01.clone();
        this.rect04.position(600, 150);
        this.rect04.attr('label/text', 'D');
        this.rect04.addTo(this.jt_graph);

        this.rect05 = this.rect01.clone();
        this.rect05.position(750, 250);
        this.rect05.attr('label/text', 'E');
        this.rect05.addTo(this.jt_graph);


        this.link12 = new joint.shapes.standard.Link({
            source: (this.rect01),
            target: (this.rect02),
            attrs: {
                line: {
                    stroke: "black",
                    strokeWidth: 2,
                    // strokeDasharray: '4 2',
                    sourceMarker: {
                    },
                    targetMarker: {
                        // the marker can be an arbitrary SVGElement
                        'type': 'circle',
                        'r': 0
                    }
                }
            }
        });
        this.link12.labels([{
            attrs: {
                text: {
                    text: '4'
                }
            }
        }]);
        this.link12.addTo(this.jt_graph);

        this.link24 = new joint.shapes.standard.Link({
            source: (this.rect02),
            target: (this.rect04),
            attrs: {
                line: {
                    stroke: "black",
                    strokeWidth: 2,
                    // strokeDasharray: '4 2',
                    sourceMarker: {
                    },
                    targetMarker: {
                        // the marker can be an arbitrary SVGElement
                        'type': 'circle',
                        'r': 0
                    }
                }
            }
        });
        this.link24.labels([{
            attrs: {
                text: {
                    text: '1'
                }
            }
        }]);
        this.link24.addTo(this.jt_graph);

        this.link23 = new joint.shapes.standard.Link({
            source: (this.rect02),
            target: (this.rect03),
            attrs: {
                line: {
                    stroke: "black",
                    strokeWidth: 2,
                    // strokeDasharray: '4 2',
                    sourceMarker: {
                    },
                    targetMarker: {
                        // the marker can be an arbitrary SVGElement
                        'type': 'circle',
                        'r': 0
                    }
                }
            }
        });
        this.link23.labels([{
            attrs: {
                text: {
                    text: '4'
                }
            }
        }]);
        this.link23.addTo(this.jt_graph);


        this.link34 = new joint.shapes.standard.Link({
            source: (this.rect03),
            target: (this.rect04),
            attrs: {
                line: {
                    stroke: "black",
                    strokeWidth: 2,
                    // strokeDasharray: '4 2',
                    sourceMarker: {
                    },
                    targetMarker: {
                        // the marker can be an arbitrary SVGElement
                        'type': 'circle',
                        'r': 0
                    }
                }
            }
        });
        this.link34.labels([{
            attrs: {
                text: {
                    text: '1'
                }
            }
        }]);
        this.link34.addTo(this.jt_graph);

        this.link14 = new joint.shapes.standard.Link({
            source: (this.rect01),
            target: (this.rect04),
            attrs: {
                line: {
                    stroke: "black",
                    strokeWidth: 2,
                    // strokeDasharray: '4 2',
                    sourceMarker: {
                    },
                    targetMarker: {
                        // the marker can be an arbitrary SVGElement
                        'type': 'circle',
                        'r': 0
                    }
                }
            }
        });
        this.link14.labels([{
            attrs: {
                text: {
                    text: '2'
                }
            }
        }]);
        this.link14.addTo(this.jt_graph);

        this.link35 = new joint.shapes.standard.Link({
            source: (this.rect03),
            target: (this.rect05),
            attrs: {
                line: {
                    stroke: "black",
                    strokeWidth: 2,
                    // strokeDasharray: '4 2',
                    sourceMarker: {
                    },
                    targetMarker: {
                        // the marker can be an arbitrary SVGElement
                        'type': 'circle',
                        'r': 0
                    }
                }
            }
        });
        this.link35.labels([{
            attrs: {
                text: {
                    text: '3'
                }
            }
        }]);
        this.link35.addTo(this.jt_graph);

        this.link45 = new joint.shapes.standard.Link({
            source: (this.rect04),
            target: (this.rect05),
            attrs: {
                line: {
                    stroke: "black",
                    strokeWidth: 2,
                    // strokeDasharray: '4 2',
                    sourceMarker: {
                    },
                    targetMarker: {
                        // the marker can be an arbitrary SVGElement
                        'type': 'circle',
                        'r': 0
                    }
                }
            }
        });
        this.link45.labels([{
            attrs: {
                text: {
                    text: '7'
                }
            }
        }]);
        this.link45.addTo(this.jt_graph);

    }




    status1() {
        this.rect01.attr('body/fill', 'white');
        this.rect02.attr('body/fill', 'white');
        this.rect03.attr('body/fill', 'white');
        this.rect04.attr('body/fill', 'white');
        this.rect05.attr('body/fill', 'white');
        this.text1.attr('label/text', 'S{                           \n\n}                        \n-----------------\nU{                           \n\n}                        ');
        this.current_step = 1;
    }

    status2() {
        this.rect01.attr('body/fill', 'orange');
        this.rect02.attr('body/fill', 'white');
        this.rect03.attr('body/fill', 'white');
        this.rect04.attr('body/fill', 'white');
        this.rect05.attr('body/fill', 'white');
        this.text1.attr('label/text', 'S{                           \nA->A=0              \n}                        \n-----------------\nU{                           \nA->B=4              \nA->C=∞             \nA->D=2              \nA->E=∞             \n}                        ');
        this.current_step = 2;
    }

    status3() {
        this.rect01.attr('body/fill', 'orange');
        this.rect02.attr('body/fill', 'white');
        this.rect03.attr('body/fill', 'white');
        this.rect04.attr('body/fill', 'orange');
        this.rect05.attr('body/fill', 'white');
        this.text1.attr('label/text', 'S{                           \nA->A=0              \nA->D=2              \n}                        \n-----------------\nU{                           \nA->B=4              \nA->C=∞             \nA->E=∞             \n}                        ');
        this.current_step = 3;
    }
    status4() {
        this.rect01.attr('body/fill', 'orange');
        this.rect02.attr('body/fill', 'white');
        this.rect03.attr('body/fill', 'white');
        this.rect04.attr('body/fill', 'orange');
        this.rect05.attr('body/fill', 'white');
        this.text1.attr('label/text', 'S{                           \nA->A=0              \nA->D=2              \n}                        \n-----------------\nU{                           \nA->B=3(A->D->B)\nA->C=3(A->D->C)\nA->E=9(A->D->E)\n}                        ');
        this.current_step = 4;
    }
    status5() {
        this.rect01.attr('body/fill', 'orange');
        this.rect02.attr('body/fill', 'orange');
        this.rect03.attr('body/fill', 'white');
        this.rect04.attr('body/fill', 'orange');
        this.rect05.attr('body/fill', 'white');
        this.text1.attr('label/text', 'S{                           \nA->A=0              \nA->D=2              \nA->B=3(A->D->B)\n}                        \n-----------------\nU{                           \nA->C=3(A->D->C)\nA->E=9(A->D->E)\n}                        ');

        this.current_step = 5;
    }
    status6() {
        this.rect01.attr('body/fill', 'orange');
        this.rect02.attr('body/fill', 'orange');
        this.rect03.attr('body/fill', 'orange');
        this.rect04.attr('body/fill', 'orange');
        this.rect05.attr('body/fill', 'white');
        this.text1.attr('label/text', 'S{                           \nA->A=0              \nA->D=2              \nA->B=3(A->D->B)\nA->C=3(A->D->C)\n}                        \n-----------------\nU{                           \nA->E=9(A->D->E)\n}                        ');

        this.current_step = 6;
    }
    status7() {
        this.rect01.attr('body/fill', 'orange');
        this.rect02.attr('body/fill', 'orange');
        this.rect03.attr('body/fill', 'orange');
        this.rect04.attr('body/fill', 'orange');
        this.rect05.attr('body/fill', 'white');
        this.text1.attr('label/text', 'S{                           \nA->A=0              \nA->D=2              \nA->B=3(A->D->B)\nA->C=3(A->D->C)\n}                        \n-----------------\nU{                           \nA->E=6(A->C->E)\n}                        ');

        this.current_step = 7;
    }
    status8() {
        this.rect01.attr('body/fill', 'orange');
        this.rect02.attr('body/fill', 'orange');
        this.rect03.attr('body/fill', 'orange');
        this.rect04.attr('body/fill', 'orange');
        this.rect05.attr('body/fill', 'orange');
        this.text1.attr('label/text', 'S{                           \nA->A=0              \nA->D=2              \nA->B=3(A->D->B)\nA->C=3(A->D->C)\nA->E=6(A->C->E)\n}                        \n-----------------\nU{                           \n}                        ');

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

let dijkstra = new Dijkstra("paper2");
// dijkstra.changeStatus(8);