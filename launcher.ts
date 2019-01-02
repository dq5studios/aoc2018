/**
 * Manage launching AOC puzzles
 */


let aoc = {

    /**
     * Launch an AOC puzzle
     *
     * @param {string} puzzle Puzzle name
     */
    launch: function(puzzle: string) {
        let worker = new Worker(`${puzzle}.js`);
        worker.postMessage({"action": "start"});
        worker.onmessage = aoc.solution;
    },

    /**
     * Receives the vram from the 8080 web worker and assigns it to a local dataview
     *
     * @param {MessageEvent} event
     */
    solution: function(event: MessageEvent) {
        document.getElementById("output").innerText += String(event.data[0]);
    }
}
