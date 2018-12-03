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
                    start: '2018-11-22T10:30:00',
                    end: '2018-11-22T12:30:00'
                },
                {
                    title: 'SFWRENG 4TE3 C01 - Cont. Optimization Algorithms',
                    start: '2018-11-12T10:30:00',
                    end: '2018-11-12T12:30:00'
                }
            ]
        });
        
    });