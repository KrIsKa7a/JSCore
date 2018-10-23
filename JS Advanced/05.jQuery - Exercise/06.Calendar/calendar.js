function calendar(arr) {
    let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let selector = $('#content');

    let day = +arr[0];
    let month = +arr[1];
    let year = +arr[2];

    let table = $('<table>');
    let caption = $('<caption>').text(`${monthNames[month - 1]} ${year}`);
    let tbody = $('<tbody>');
    let trDays = $('<tr>');

    for (let i = 0; i < 7; i++) {
        let th = $('<th>').text(calcDay(i));
        trDays.append(th);
    }

    table.append(caption);
    tbody.append(trDays);

    let days = daysInMonth(month, year);
    let firstDay = new Date(year, month-1 , 0).getDay()+1;
    console.log(firstDay);
    let countDays = 1;
    let whenToStart = false;

    while (true) {

        if (countDays > days) {
            break
        }

        let tr = $('<tr>');

        for (let i = 1; i <=7; i++) {

            let td = $('<td>');

            if(day === countDays){
                $(td).addClass('today')
            }

            if (Number(firstDay) === i) {
                whenToStart = true;
            }
            if (countDays <= Number(days) && whenToStart === true){
                td.text(countDays)
                countDays++
            }

            $(tr).append(td);
        }
        tbody.append(tr);
    }
    table.append(tbody);
    table.appendTo(selector);

    function calcDay(num) {
        let day;
        switch (num) {case 0:day = 'Mon';break;
            case 1:day = 'Tue';break;
            case 2:day = 'Wed';break;
            case 3:day = 'Thu';break;
            case 4:day = 'Fri';break;
            case 5:day = 'Sat';break;
            case 6:day = 'Sun';break;
        }
        return day;
    }

    function daysInMonth(m, y) {
        return new Date(y, m, 0).getDate();
    }
}