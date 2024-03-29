//const sendNotifications= document.getElementById('sendNotification');

//sendNotifications.addEventListener('click', function(){
  //  alert("Notification sent successfully!");
//})
let popup1=document.getElementById("popup1"); //notification popup
let popup2=document.getElementById("popup2"); //announcement popup
        function openPopup1(){
            if(customerID.value!== "" & reportID.value!== "" & description.value!== "")
                {
                    popup1.classList.add("open-popup");
                }
        }
        function closePopup1(){
            popup1.classList.remove("open-popup");
        }
        function openPopup2(){
            popup2.classList.add("open-popup");
        }
        function closePopup2(){
            popup2.classList.remove("open-popup");
        }
let reportID=document.getElementById("reportID");
let customerID= document.getElementById("customerID");
let description= document.getElementById("description");
let notificationForm=document.getElementById("notificationForm");
        function openPopupNotify(){
          notificationForm.classList.add("open-popup");
        }
        function closePopupNotify(){
          notificationForm.classList.remove("open-popup");
          reportID.value="";
          customerID.value="";
          description.value="";

         

        }
function sendNotification() {
        if (customerID.value !== "" && reportID.value !== "" && description.value !== "") {
                openPopup1();
                closePopupNotify();
            }
        }
function sendAnnouncement() {
        if (description1.value !== "") {
                    openPopup2();
                    closePopupAnnounce();
                }
            }
let description1= document.getElementById("announceDescription");
let announcement=document.getElementById("announcement");
        function openPopupAnnounce(){
          announcement.classList.add("open-popup");
        }
        function closePopupAnnounce(){
          announcement.classList.remove("open-popup");
          description1.value="";

        }

// var index, table= document.getElementById('table');
// for(var i =1; i< table.rows.length; i++)
// {
//     table.rows[i].cells[4].onclick = function ()
//     {
//         index = this.parentNode.rowIndex;
//         table.deleteRow(index);
        
//     };
   

// }
var table = document.getElementById('table');
var deletedRows = [];

// Retrieve deleted row indices from local storage
var deletedRowsString = localStorage.getItem('deletedRows');
if (deletedRowsString) {
  deletedRows = JSON.parse(deletedRowsString);
}

for (var i = 1; i < table.rows.length; i++) {
  if (!deletedRows.includes(i)) {
    table.rows[i].cells[4].onclick = function() {
      var index = this.parentNode.rowIndex;
      table.deleteRow(index);
      deletedRows.push(index); // Add the deleted row index to the array
      localStorage.setItem('deletedRows', JSON.stringify(deletedRows)); // Store the updated array in local storage
    };
  } else {
    // Skip rendering deleted rows
    table.rows[i].style.display = 'none';
  }
}



const search = document.querySelector('.input-group input'),
    table_rows = document.querySelectorAll('tbody tr'),
    table_headings = document.querySelectorAll('thead th');

// 1. Searching for specific data of HTML table
search.addEventListener('input', searchTable);

function searchTable() {
    table_rows.forEach((row, i) => {
        let table_data = row.textContent.toLowerCase(),
            search_data = search.value.toLowerCase();

        row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
        row.style.setProperty('--delay', i / 25 + 's');
    })

    document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
        visible_row.style.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000b';
    });
}

// 2. Sorting | Ordering data of HTML table

table_headings.forEach((head, i) => {
    let sort_asc = true;
    head.onclick = () => {
        table_headings.forEach(head => head.classList.remove('active'));
        head.classList.add('active');

        document.querySelectorAll('td').forEach(td => td.classList.remove('active'));
        table_rows.forEach(row => {
            row.querySelectorAll('td')[i].classList.add('active');
        })

        head.classList.toggle('asc', sort_asc);
        sort_asc = head.classList.contains('asc') ? false : true;

        sortTable(i, sort_asc);
    }
})


function sortTable(column, sort_asc) {
    [...table_rows].sort((a, b) => {
        let first_row = a.querySelectorAll('td')[column].textContent.toLowerCase(),
            second_row = b.querySelectorAll('td')[column].textContent.toLowerCase();

        return sort_asc ? (first_row < second_row ? 1 : -1) : (first_row < second_row ? -1 : 1);
    })
        .map(sorted_row => document.querySelector('tbody').appendChild(sorted_row));
}

// 3. Converting HTML table to PDF

const pdf_btn = document.querySelector('#toPDF');
const customers_table = document.querySelector('#customers_table');

const toPDF = function (customers_table) {
    const html_code = `
    <link rel="stylesheet" href="style.css">
    <main class="table" >${customers_table.innerHTML}</main>
    `;

    const new_window = window.open();
    new_window.document.write(html_code);

    setTimeout(() => {
        new_window.print();
        new_window.close();
    }, 400);
}

// pdf_btn.onclick = () => {
//     toPDF(customers_table);
// }

// 4. Converting HTML table to JSON

const json_btn = document.querySelector('#toJSON');

const toJSON = function (table) {
    let table_data = [],
        t_head = [],

        t_headings = table.querySelectorAll('th'),
        t_rows = table.querySelectorAll('tbody tr');

    for (let t_heading of t_headings) {
        let actual_head = t_heading.textContent.trim().split(' ');

        t_head.push(actual_head.splice(0, actual_head.length - 1).join(' ').toLowerCase());
    }

    t_rows.forEach(row => {
        const row_object = {},
            t_cells = row.querySelectorAll('td');

        t_cells.forEach((t_cell, cell_index) => {
            const img = t_cell.querySelector('img');
            if (img) {
                row_object['customer image'] = decodeURIComponent(img.src);
            }
            row_object[t_head[cell_index]] = t_cell.textContent.trim();
        })
        table_data.push(row_object);
    })

    return JSON.stringify(table_data, null, 4);
}

// json_btn.onclick = () => {
//     const json = toJSON(customers_table);
//     downloadFile(json, 'json')
// }

// 5. Converting HTML table to CSV File

const csv_btn = document.querySelector('#toCSV');

const toCSV = function (table) {
    // Code For SIMPLE TABLE
    // const t_rows = table.querySelectorAll('tr');
    // return [...t_rows].map(row => {
    //     const cells = row.querySelectorAll('th, td');
    //     return [...cells].map(cell => cell.textContent.trim()).join(',');
    // }).join('\n');

    const t_heads = table.querySelectorAll('th'),
        tbody_rows = table.querySelectorAll('tbody tr');

    const headings = [...t_heads].map(head => {
        let actual_head = head.textContent.trim().split(' ');
        return actual_head.splice(0, actual_head.length - 1).join(' ').toLowerCase();
    }).join(',') + ',' + 'image name';

    const table_data = [...tbody_rows].map(row => {
        const cells = row.querySelectorAll('td'),
            img = decodeURIComponent(row.querySelector('img').src),
            data_without_img = [...cells].map(cell => cell.textContent.replace(/,/g, ".").trim()).join(',');

        return data_without_img + ',' + img;
    }).join('\n');

    return headings + '\n' + table_data;
}

// csv_btn.onclick = () => {
//     const csv = toCSV(customers_table);
//     downloadFile(csv, 'csv', 'customer orders');
// }

// 6. Converting HTML table to EXCEL File

const excel_btn = document.querySelector('#toEXCEL');

const toExcel = function (table) {
    // Code For SIMPLE TABLE
    // const t_rows = table.querySelectorAll('tr');
    // return [...t_rows].map(row => {
    //     const cells = row.querySelectorAll('th, td');
    //     return [...cells].map(cell => cell.textContent.trim()).join('\t');
    // }).join('\n');

    const t_heads = table.querySelectorAll('th'),
        tbody_rows = table.querySelectorAll('tbody tr');

    const headings = [...t_heads].map(head => {
        let actual_head = head.textContent.trim().split(' ');
        return actual_head.splice(0, actual_head.length - 1).join(' ').toLowerCase();
    }).join('\t') + '\t' + 'image name';

    const table_data = [...tbody_rows].map(row => {
        const cells = row.querySelectorAll('td'),
            img = decodeURIComponent(row.querySelector('img').src),
            data_without_img = [...cells].map(cell => cell.textContent.trim()).join('\t');

        return data_without_img + '\t' + img;
    }).join('\n');

    return headings + '\n' + table_data;
}

// excel_btn.onclick = () => {
//     const excel = toExcel(customers_table);
//     downloadFile(excel, 'excel');
// }

