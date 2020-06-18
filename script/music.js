// create a new synth
const synth = Tone.synth();
// set tone to sine
synth.oscillator.type = "sine";
//connector to master
synth.toMaster();
