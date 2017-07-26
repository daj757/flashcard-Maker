module.exports = ClozeCard;
function ClozeCard(text, cloze) {
	 if (!(this instanceof ClozeCard)) { 
    
    return new ClozeCard(text, cloze);
  } 
	this.text = text;
	this.cloze = cloze;
}
