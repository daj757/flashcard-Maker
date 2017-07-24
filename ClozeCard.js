module.exports = ClozeCard;
function ClozeCard(text, cloze) {
	this.text = text;
	this.cloze = cloze;
}
ClozeCard.prototype.partial = ' ';
ClozeCard.prototype.fulltext = ' ';