/**
 * Advent of code, day four, first puzzle
 * @see https://adventofcode.com/2018/day/4
 */

let aoc4a = () => {

    let input = ``;

    input = `[1518-11-01 00:00] Guard #10 begins shift
[1518-11-01 00:05] falls asleep
[1518-11-01 00:25] wakes up
[1518-11-01 00:30] falls asleep
[1518-11-01 00:55] wakes up
[1518-11-01 23:58] Guard #99 begins shift
[1518-11-02 00:40] falls asleep
[1518-11-02 00:50] wakes up
[1518-11-03 00:05] Guard #10 begins shift
[1518-11-03 00:24] falls asleep
[1518-11-03 00:29] wakes up
[1518-11-04 00:02] Guard #99 begins shift
[1518-11-04 00:36] falls asleep
[1518-11-04 00:46] wakes up
[1518-11-05 00:03] Guard #99 begins shift
[1518-11-05 00:45] falls asleep
[1518-11-05 00:55] wakes up`;

    let list = input.split("\n").sort();

    // Strategy 1: Find the guard that has the most minutes asleep. What minute does that guard spend asleep the most?
    let guard: number = null;
    list.forEach((value) => {
        let matches = value.match(/\[([^\]]*)\] (.*)/);
        let timestamp = matches[1];
        if (matches[2].search(/Guard #[0-9]+/) > -1) {
            // Guard change
            guard = matches[2].search(/Guard #[0-9]+/)[1];
        }
    });

    self.postMessage([overlaps.join()]);
}


/**
 * postMessage dispatcher
 *
 * @param {MessageEvent} event Message received
 */
function commandDispatch(event: MessageEvent): void {
    aoc4a();
}

self.onmessage = commandDispatch;
