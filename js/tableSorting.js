//Include dependency on jQuery by declaring
var $;

//Make sure each alternating row has an odd-class
function makeOddRows(tableEl) {
    tableEl.find('tr:odd').addClass('odd');
    tableEl.find('tr:even').removeClass('odd');
}


//Prepares sorting on a table
function prepareSorting(tableRef) {
    var columnElements = tableRef.find('tr:first-child td');
    columnElements.each(
        function (index) {
            if (!$(this).hasClass('functionTd')) {
                //Add title
                $(this).attr("title", "Click to sort");
                //Add click-event to sort
                $(this).click(
                    function () {
                        var tbl = $(this).closest('table');
                        var trArr = tbl.find('tr').toArray();
                        //Remove the top record


                        trArr.shift();
                        trArr.sort(
                            function (tr1, tr2) {
                                var val1 = $(tr1.getElementsByTagName('td')[index]).text().toUpperCase();
                                var val2 = $(tr2.getElementsByTagName('td')[index]).text().toUpperCase();
                                if (val1.length === 0 && val2.length === 0) return 0;
                                if (val1.length === 0) return 1;
                                if (val2.length === 0) return -1;
                                return (val1 < val2 ? -1 : 1);
                            }
                        );
                        //Push all records to the table element in sorted order
                        for (var i = 0; i < trArr.length; i++) {
                            $(trArr[i]).appendTo(tbl);
                        }
                        tbl.find('tr').removeClass('filteredIn');
                        makeOddRows(tbl);
                        //Clear filter fields
                        columnElements.find('input.filter').val('');
                        columnElements.find('span.matchSpan').html('');
                    }
                );
                //Append column filters
                var filter = $("<input type='text' title='Enter filter' class='filter'/>");
                var span = $("<span></span>");
                span.append(filter).append("<span class='matchSpan'></span>").append("<br/>");
                $(this).prepend(span);
                filter.click(
                    function () {
                        return false;
                        /*Stop propagating to prevent sorting*/
                    }
                );
                filter.change(
                    function () {
                        var filterStr = $(this).val().toLowerCase();
                        var tableRef = $(this).closest('table');
                        var tdRef = $(this).closest('td');
                        //Run through all table rows, pushing those to the top which contain the filter Str
                        var matches = tableRef.find('tr').filter(
                            function () {
                                var tdEl = $(this).find('td:eq(' + index + ')');
                                if (tdEl.text().toLowerCase().indexOf(filterStr) > -1) return true;
                                else return false;
                            }
                        );
                        var header = tableRef[0].getElementsByTagName('tr')[0];
                        var tbody = tableRef[0].getElementsByTagName('tbody');
                        var root = (tbody ? $(tbody) : tableRef);
                        root.prepend(matches);
                        tdRef.find('span.matchSpan').html("<br/>Count: " + matches.size());
                        root.prepend(header);
                        makeOddRows(tableRef);
                        matches.addClass('filteredIn');
                    }
                );
            }
        }
    );
}

