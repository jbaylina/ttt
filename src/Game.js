function Game( players, board ) {
    if( !players ) throw new Error('You have to set players');
    if( !board ) throw new Error('You have to set board');
    this._currentPlayer =  "player1";
}

Game.prototype.isFinished  = function() {
    return false;
};
Game.prototype.currentPlayer  = function() {
    return this._currentPlayer;
};
