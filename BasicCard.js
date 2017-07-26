module.exports = NewCard;
function NewCard (front, back) {
	if (!(this instanceof NewCard)) { 
    
    return new NewCard(front, back);
  } 
	this.front = front;
	this.back = back;

} 