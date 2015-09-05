describe("ttt", function() {

  it("should create a new game", function() {
    var players = {};
    var board = {};

    var game = new Game(players, board);

    expect(game instanceof Game).toBe(true);

  });

  it("should throw an exception without parameters", function() {
    expect(function(){
      new Game();
    }).toThrow();
  });

  it("should throw if the game have been created without players", function(){
    var players = {};

    expect(function(){
      new Game(players);
    }).toThrow();
  });

  it("should detect if the game has not finished", function(){
    var players = {};
    var board = {};
    var game = new Game(players, board);

    expect(game.isFinished()).toBe(false);
  });

  it("should detect the current player" , function() {
    var players = {};
    var board = {};
    var game = new Game(players, board);

    expect(game.currentPlayer()).toBe("player1");
  });
});
