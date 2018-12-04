$(document).ready(function() {
        
        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,basicWeek,basicDay'
            },
            // defaultDate: '2018-12-12',
            navLinks: true, // can click day/week names to navigate views
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            events: [
                {
                    title: 'SFWRENG 3GC3 C01 - Computer Graphics',
                    start: '2018-11-05T09:30:00',
                    end: '2018-11-05T11:20:00'
                },
                {
                    title: 'SFWRENG 4HC3 C01 - Human Computer Interfaces',
                    start: '2018-11-05T16:30:00',
                    end: '2018-11-05T17:20:00'
                },
                {
                    title: 'COMPSCI 3IS3 C01 - Information Security',
                    start: '2018-11-06T09:30:00',
                    end: '2018-11-06T11:20:00'
                },
                {
                    title: 'COMPSCI 3IS3 C01 - Information Security',
                    start: '2018-11-07T09:30:00',
                    end: '2018-11-07T10:20:00'
                },
                {
                    title: 'SFWRENG 4TE3 C01 - Cont. Optimization Algorithms',
                    start: '2018-11-07T11:30:00',
                    end: '2018-11-07T14:30:00'
                },
                {
                    title: 'SFWRENG 4HC3 C01 - Human Computer Interfaces',
                    start: '2018-11-07T16:30:00',
                    end: '2018-11-07T17:20:00'
                },
                {
                    title: 'SFWRENG 4HC3 T01 - Human Computer Interfaces',
                    start: '2018-11-08T09:30:00',
                    end: '2018-11-08T10:20:00'
                },
                {
                    title: 'SFWRENG 3GC3 C01 - Computer Graphics',
                    start: '2018-11-08T10:30:00',
                    end: '2018-11-08T11:20:00'
                },
                {
                    title: 'SFWRENG 4TE3 T01 - Cont. Optimization Algorithms',
                    start: '2018-11-08T13:30:00',
                    end: '2018-11-08T14:30:00'
                },
                {
                    title: 'SFWRENG 4HC3 C01 - Human Computer Interfaces',
                    start: '2018-11-08T16:30:00',
                    end: '2018-11-08T17:20:00'
                },
                /////////////////////////////////////////////
                {
                    title: 'SFWRENG 3GC3 C01 - Computer Graphics',
                    start: '2018-11-12T09:30:00',
                    end: '2018-11-12T11:20:00'
                },
                {
                    title: 'SFWRENG 4HC3 C01 - Human Computer Interfaces',
                    start: '2018-11-12T16:30:00',
                    end: '2018-11-12T17:20:00'
                },
                {
                    title: 'COMPSCI 3IS3 C01 - Information Security',
                    start: '2018-11-13T09:30:00',
                    end: '2018-11-13T11:20:00'
                },
                {
                    title: 'COMPSCI 3IS3 C01 - Information Security',
                    start: '2018-11-14T09:30:00',
                    end: '2018-11-14T10:20:00'
                },
                {
                    title: 'SFWRENG 4TE3 C01 - Cont. Optimization Algorithms',
                    start: '2018-11-14T11:30:00',
                    end: '2018-11-14T14:30:00'
                },
                {
                    title: 'SFWRENG 4HC3 C01 - Human Computer Interfaces',
                    start: '2018-11-14T16:30:00',
                    end: '2018-11-14T17:20:00'
                },
                {
                    title: 'SFWRENG 4HC3 T01 - Human Computer Interfaces',
                    start: '2018-11-15T09:30:00',
                    end: '2018-11-15T10:20:00'
                },
                {
                    title: 'SFWRENG 3GC3 C01 - Computer Graphics',
                    start: '2018-11-15T10:30:00',
                    end: '2018-11-15T11:20:00'
                },
                {
                    title: 'SFWRENG 4TE3 T01 - Cont. Optimization Algorithms',
                    start: '2018-11-15T13:30:00',
                    end: '2018-11-15T14:30:00'
                },
                {
                    title: 'SFWRENG 4HC3 C01 - Human Computer Interfaces',
                    start: '2018-11-15T16:30:00',
                    end: '2018-11-15T17:20:00'
                },
                ///////////////////////////////
                {
                    title: 'SFWRENG 3GC3 C01 - Computer Graphics',
                    start: '2018-11-19T09:30:00',
                    end: '2018-11-19T11:20:00'
                },
                {
                    title: 'SFWRENG 4HC3 C01 - Human Computer Interfaces',
                    start: '2018-11-19T16:30:00',
                    end: '2018-11-19T17:20:00'
                },
                {
                    title: 'COMPSCI 3IS3 C01 - Information Security',
                    start: '2018-11-20T09:30:00',
                    end: '2018-11-20T11:20:00'
                },
                {
                    title: 'COMPSCI 3IS3 C01 - Information Security',
                    start: '2018-11-21T09:30:00',
                    end: '2018-11-21T10:20:00'
                },
                {
                    title: 'SFWRENG 4TE3 C01 - Cont. Optimization Algorithms',
                    start: '2018-11-21T11:30:00',
                    end: '2018-11-21T14:30:00'
                },
                {
                    title: 'SFWRENG 4HC3 C01 - Human Computer Interfaces',
                    start: '2018-11-21T16:30:00',
                    end: '2018-11-21T17:20:00'
                },
                {
                    title: 'SFWRENG 4HC3 T01 - Human Computer Interfaces',
                    start: '2018-11-22T09:30:00',
                    end: '2018-11-22T10:20:00'
                },
                {
                    title: 'SFWRENG 3GC3 C01 - Computer Graphics',
                    start: '2018-11-22T10:30:00',
                    end: '2018-11-22T11:20:00'
                },
                {
                    title: 'SFWRENG 4TE3 T01 - Cont. Optimization Algorithms',
                    start: '2018-11-22T13:30:00',
                    end: '2018-11-22T14:30:00'
                },
                {
                    title: 'SFWRENG 4HC3 C01 - Human Computer Interfaces',
                    start: '2018-11-22T16:30:00',
                    end: '2018-11-22T17:20:00'
                },
                /////////////////////////
                {
                    title: 'SFWRENG 3GC3 C01 - Computer Graphics',
                    start: '2018-11-26T09:30:00',
                    end: '2018-11-26T11:20:00'
                },
                {
                    title: 'SFWRENG 4HC3 C01 - Human Computer Interfaces',
                    start: '2018-11-26T16:30:00',
                    end: '2018-11-26T17:20:00'
                },
                {
                    title: 'COMPSCI 3IS3 C01 - Information Security',
                    start: '2018-11-27T09:30:00',
                    end: '2018-11-27T11:20:00'
                },
                {
                    title: 'COMPSCI 3IS3 C01 - Information Security',
                    start: '2018-11-28T09:30:00',
                    end: '2018-11-28T10:20:00'
                },
                {
                    title: 'SFWRENG 4TE3 C01 - Cont. Optimization Algorithms',
                    start: '2018-11-28T11:30:00',
                    end: '2018-11-28T14:30:00'
                },
                {
                    title: 'SFWRENG 4HC3 C01 - Human Computer Interfaces',
                    start: '2018-11-28T16:30:00',
                    end: '2018-11-28T17:20:00'
                },
                {
                    title: 'SFWRENG 4HC3 T01 - Human Computer Interfaces',
                    start: '2018-11-29T09:30:00',
                    end: '2018-11-29T10:20:00'
                },
                {
                    title: 'SFWRENG 3GC3 C01 - Computer Graphics',
                    start: '2018-11-29T10:30:00',
                    end: '2018-11-29T11:20:00'
                },
                {
                    title: 'SFWRENG 4TE3 T01 - Cont. Optimization Algorithms',
                    start: '2018-11-29T13:30:00',
                    end: '2018-11-29T14:30:00'
                },
                {
                    title: 'SFWRENG 4HC3 C01 - Human Computer Interfaces',
                    start: '2018-11-29T16:30:00',
                    end: '2018-11-29T17:20:00'
                },
                /////////////////////////
                {
                    title: 'SFWRENG 3GC3 C01 - Computer Graphics',
                    start: '2018-12-03T09:30:00',
                    end: '2018-12-03T11:20:00'
                },
                {
                    title: 'SFWRENG 4HC3 C01 - Human Computer Interfaces',
                    start: '2018-12-03T16:30:00',
                    end: '2018-12-03T17:20:00'
                },
                {
                    title: 'COMPSCI 3IS3 C01 - Information Security',
                    start: '2018-12-04T09:30:00',
                    end: '2018-12-04T11:20:00'
                },
                {
                    title: 'COMPSCI 3IS3 C01 - Information Security',
                    start: '2018-12-05T09:30:00',
                    end: '2018-12-05T10:20:00'
                },
                {
                    title: 'SFWRENG 4TE3 C01 - Cont. Optimization Algorithms',
                    start: '2018-12-05T11:30:00',
                    end: '2018-12-05T14:30:00'
                },
                {
                    title: 'SFWRENG 4HC3 C01 - Human Computer Interfaces',
                    start: '2018-12-05T16:30:00',
                    end: '2018-12-05T17:20:00'
                }
            ]
        });
        
    });