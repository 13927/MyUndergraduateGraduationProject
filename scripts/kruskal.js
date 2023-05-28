class Kruskal extends Base {

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

        this.rect01 = new joint.shapes.standard.Circle();
        this.rect01.position(210, 100);
        this.rect01.resize(40, 40);
        this.rect01.attr({
            body: {
                fill: 'white'
            },
            label: {
                text: 'V1',
                fill: 'black'
            }
        });
        this.rect01.addTo(this.jt_graph);

        this.rect02 = this.rect01.clone();
        this.rect02.position(90, 190);
        this.rect02.attr('label/text', 'V2');
        this.rect02.addTo(this.jt_graph);

        this.rect03 = this.rect01.clone();
        this.rect03.position(210, 220);
        this.rect03.attr('label/text', 'V3');
        this.rect03.addTo(this.jt_graph);

        this.rect04 = this.rect01.clone();
        this.rect04.position(330, 190);
        this.rect04.attr('label/text', 'V4');
        this.rect04.addTo(this.jt_graph);

        this.rect05 = this.rect01.clone();
        this.rect05.position(140, 320);
        this.rect05.attr('label/text', 'V5');
        this.rect05.addTo(this.jt_graph);

        this.rect06 = this.rect01.clone();
        this.rect06.position(280, 320);
        this.rect06.attr('label/text', 'V6');
        this.rect06.addTo(this.jt_graph);

        this.link00 = new joint.shapes.standard.Link({
            source: { x: 500, y: 50 },
            target: { x: 500, y: 500 },
            attrs: {
                line: {
                    stroke: "black",
                    strokeWidth: 2,
                    strokeDasharray: '4 2',
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
        this.link00.addTo(this.jt_graph);

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
                    text: '6'
                }
            }
        }]);
        this.link12.addTo(this.jt_graph);

        this.link13 = new joint.shapes.standard.Link({
            source: (this.rect01),
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
        this.link13.labels([{
            attrs: {
                text: {
                    text: '1'
                }
            }
        }]);
        this.link13.addTo(this.jt_graph);


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
                    text: '5'
                }
            }
        }]);
        this.link14.addTo(this.jt_graph);

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
                    text: '5'
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
                    text: '5'
                }
            }
        }]);
        this.link34.addTo(this.jt_graph);


        this.link25 = new joint.shapes.standard.Link({
            source: (this.rect02),
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
        this.link25.labels([{
            attrs: {
                text: {
                    text: '3'
                }
            }
        }]);
        this.link25.addTo(this.jt_graph);

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
                    text: '6'
                }
            }
        }]);
        this.link35.addTo(this.jt_graph);

        this.link36 = new joint.shapes.standard.Link({
            source: (this.rect03),
            target: (this.rect06),
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
        this.link36.labels([{
            attrs: {
                text: {
                    text: '4'
                }
            }
        }]);
        this.link36.addTo(this.jt_graph);

        this.link46 = new joint.shapes.standard.Link({
            source: (this.rect04),
            target: (this.rect06),
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
        this.link46.labels([{
            attrs: {
                text: {
                    text: '2'
                }
            }
        }]);
        this.link46.addTo(this.jt_graph);

        this.link56 = new joint.shapes.standard.Link({
            source: (this.rect05),
            target: (this.rect06),
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
        this.link56.labels([{
            attrs: {
                text: {
                    text: '6'
                }
            }
        }]);
        this.link56.addTo(this.jt_graph);


        this.rect07 = this.rect01.clone();
        this.rect07.position(710, 100);
        this.rect07.addTo(this.jt_graph);

        this.rect08 = this.rect02.clone();
        this.rect08.position(590, 190);
        this.rect08.addTo(this.jt_graph);

        this.rect09 = this.rect03.clone();
        this.rect09.position(710, 220);
        this.rect09.addTo(this.jt_graph);

        this.rect10 = this.rect04.clone();
        this.rect10.position(830, 190);
        this.rect10.addTo(this.jt_graph);

        this.rect11 = this.rect05.clone()
        this.rect11.position(640, 320);
        this.rect11.addTo(this.jt_graph);

        this.rect12 = this.rect06.clone();
        this.rect12.position(780, 320);
        this.rect12.addTo(this.jt_graph);

        this.link79 = new joint.shapes.standard.Link({
            source: (this.rect07),
            target: (this.rect09),
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
        this.link79.labels([{
            attrs: {
                text: {
                    text: '1'
                }
            }
        }]);
        // this.link79.addTo(this.jt_graph);

        this.link78 = this.link12.clone();
        this.link78.source(this.rect07);
        this.link78.target(this.rect08);
        // this.link78.addTo(this.jt_graph);

        this.link110 = this.link14.clone();
        this.link110.source(this.rect07);
        this.link110.target(this.rect10);
        // this.link110.addTo(this.jt_graph);

        this.link89 = this.link23.clone();
        this.link89.source(this.rect08);
        this.link89.target(this.rect09);
        // this.link89.addTo(this.jt_graph);

        this.link910 = this.link34.clone();
        this.link910.source(this.rect09);
        this.link910.target(this.rect10);
        // this.link910.addTo(this.jt_graph);

        this.link811 = this.link25.clone();
        this.link811.source(this.rect08);
        this.link811.target(this.rect11);
        // this.link811.addTo(this.jt_graph);

        this.link911 = this.link35.clone();
        this.link911.source(this.rect09);
        this.link911.target(this.rect11);
        // this.link911.addTo(this.jt_graph);

        this.link912 = this.link36.clone();
        this.link912.source(this.rect09);
        this.link912.target(this.rect12);
        // this.link912.addTo(this.jt_graph);

        this.link1012 = this.link46.clone();
        this.link1012.source(this.rect10);
        this.link1012.target(this.rect12);
        // this.link1012.addTo(this.jt_graph);

        this.link1112 = this.link56.clone();
        this.link1112.source(this.rect11);
        this.link1112.target(this.rect12);
        // this.link1112.addTo(this.jt_graph);

        this.statusList = new Array(this.status1, this.status2, this.status3, this.status4, this.status5, this.status6);
    }



    status1() {
        this.link79.remove();
        this.link912.remove();
        this.link1012.remove();
        this.link89.remove();
        this.link811.remove();
        this.current_step = 1;
    }

    status2() {
        this.link912.remove();
        this.link1012.remove();
        this.link89.remove();
        this.link811.remove();
        this.link79.addTo(this.jt_graph);
        this.current_step = 2;
    }

    status3() {
        this.link912.remove();
        this.link89.remove();
        this.link811.remove();
        this.link79.addTo(this.jt_graph);
        this.link1012.addTo(this.jt_graph);
        this.current_step = 3;
    }
    status4() {
        this.link912.remove();
        this.link89.remove();
        this.link811.addTo(this.jt_graph);
        this.link79.addTo(this.jt_graph);
        this.link1012.addTo(this.jt_graph);
        this.current_step = 4;
    }
    status5() {
        this.link811.addTo(this.jt_graph);
        this.link79.addTo(this.jt_graph);
        this.link912.addTo(this.jt_graph);
        this.link1012.addTo(this.jt_graph);
        this.link89.remove();
        this.current_step = 5;
    }
    status6() {
        this.link79.addTo(this.jt_graph);
        this.link912.addTo(this.jt_graph);
        this.link1012.addTo(this.jt_graph);
        this.link89.addTo(this.jt_graph);
        this.link811.addTo(this.jt_graph);
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


let kruskal = new Kruskal("paper1");

// prim.changeStatus(3);
// prim.status1();
// prim.status2();
// prim.status3();
// prim.status4();
// prim.status5();
// prim.status6();




