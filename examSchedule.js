$(document).ready(function() {
        
        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,basicWeek,basicDay'
            },
            // defaultDate: '2018-12-01',
            navLinks: true, // can click day/week names to navigate views
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            events: [
                {
                    title: 'SFWRENG 4HC3-C01(12181)',
                    start: '2018-12-11T09:00:00',
                    end: '2018-12-11T11:30:00'
                },
                {
                    title: 'SFWRENG 4TE3-C01(12259)',
                    start: '2018-12-12T09:00:00',
                    end: '2018-12-12T11:30:00'
                },
                {
                    title: 'SFWRENG 3GC3-C01(12005)',
                    start: '2018-12-15T16:00:00',
                    end: '2018-12-15T18:30:00'
                },
                {
                    title: 'COMPSCI 3IS3-C01(12387)',
                    start: '2018-12-17T12:30:00',
                    end: '2018-12-17T14:30:00'
                }
            ]
        });
        
    });