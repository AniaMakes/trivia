require('./game.js');

describe("The test environment", function() {
  it("should pass", function() {
    expect(true).toBe(true);
  });

  it("should access game", function() {
    expect(Game).toBeDefined();
  });
});

describe("Your spec", function() {
  let game, player1, player2, player3;

  beforeEach(function(){
    game = new Game();
    player1 = "Chet";
    player2 = "Pat";
    player3 = "Sue";

    game.add(player1);
    game.add(player2);
    game.add(player3);
  })

  it("after adding three players, the game has 3 players", function(){
    expect(game.howManyPlayers()).toBe(3);
  })

  


  // it ...
});
