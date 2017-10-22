Trello.get("boards/" + board.id + "/labels", function(labels) {

	Trello.get("boards/" + board.id + "/cards", function(cards) {

		output = "<div id='cover-page'>"
	
			output += "<h1>" + board.name + "</h1>";
			output += "<p>Created on " + printDate + "</p>";
			output += "<p class='foot'>Made with {{ site.title }}:<br>{{ site.url | append: site.baseurl }}</p>"
	
		output += "</div>"
	
		output += "<div id='lists' class='columns-" + displayColumns + "'>";

	    $.each(board.lists, function (i){

		    var idList = this.id;
			output += "<div class='list'>";
			output += "<h2>"+this.name+"</h2>";

		    $.each(labels, function(index, label) {

				var idLabels = this.id;

				if (displayLabels == true) {

				    output += "<h3 class='" + this.color + "'>" + this.name + "</h3>";

				}

				output+= "<ul class='cards'>";

					$.each(board.cards, function(i){
						var idCard = this.id;

						if (displayCheckMarks == true) {

		       				output += "<li class='ticks-on'>";

		       			} else {

			       			output += "<li class='ticks-off'>";

		       			}


							if (this.idList == idList){

								if (this.idLabels == idLabels){

									if (displayCheckMarks == true) {

										if (this.dueComplete == true) {
										    output += "<span class='tick'></span>";
										} else {
										    output += "<span class='no-tick'></span>";
										}

									}

									output += "<span class='content'>";

									if (displayDueDates == true) {

										if (this.due != null) {
											var cardDue = new Date(this.due);
											var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
					  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
											output += " <span class='date'>" + cardDue.getDate() + ' ' + monthShortNames[cardDue.getMonth()] + "</span>";
										}

									}

						       		output += this.name + "</span>";

						       	}

						   	}


		       			output += "</li>";

					});

				output+= "</ul>";

			});

			output += "</div>";
		});

		output += '</div>';
		$('#output').html(output);

		document.getElementById('board-name').innerHTML = board.name;

	});

});
