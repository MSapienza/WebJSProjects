"use strict";

var tempArray = [], 
    i = 0, 
    j = 0, 
    k = 0;

function getScalePattern(value, scaleRequest)
{
    if (scaleRequest == "major")
    {
        var pattern = [0, 2, 4, 5, 7, 9, 11, 12];
    }
    else if (scaleRequest == "melodic")
    {
        var pattern = [0, 2, 3, 5, 7, 9, 11, 12];
    }
    else if (scaleRequest == "pentatonic")
    {
        var pattern = [0, 3, 5, 6, 7, 10, 11, 12];
    }
    else if (scaleRequest == "harmonic")
    {
        var pattern = [0, 2, 3, 5, 7, 9, 11, 12];
    }
    else if (scaleRequest == "natural")
    {
        var pattern = [0, 2, 3, 5, 7, 8, 10, 12];
    }

    return tempArray = calculateScale(pattern, value);
}

function calculateScale(pattern, value)
{
    var allNotes = getAllNotes(), 
        start, 
        scaleNotes = [];

    for (i = 0; i < allNotes.length; i++)
	{
		if(allNotes[i] == value)
		{
			start = i;
			break;
		}
	}
	
	for(i = 0; i < pattern.length; i++)
	{
		scaleNotes[i] = " " + allNotes[start + pattern[i]] + " ";
	}
	
	document.getElementById("result").innerHTML = scaleNotes;
	return scaleNotes;
}

function keepUniques(chords)
{
    for (i = 0; i < chords.length; i++)
    {
        for (j = i+1; j < chords.length; j++)
        {
            if (chords[i] === chords[j])
            {
                chords[i] = "";
            }
        }
    }
    
    return chords;
}

function removeNulls(chords)
{
    var filtered = chords.filter(Boolean);
    return filtered;
}

function calculateRoot() 
{
    var chords = [],
        getMajorScale = [],
        getHarmonicMinorScale = [],
        getNaturalMinorScale = [],
        getMelodicMinorScale = [],
        root = [],
        allNotesInChords = [],
        majorCount = 0,
        naturalMinorCount = 0,
        harmonicMinorCount = 0,
        melodicMinorCount = 0,
        perfectMatchFound = false,
        majorRank = [],
        naturalMinorRank = [],
        harmonicMinorRank = [],
        melodicMinorRank = [],
        radioNames = ["chord1", "chord2", "chord3", "chord4"];
    
    for (i = 0; i < 4; i++)
    {
        chords[i] = document.getElementById(radioNames[i]).value;
    }
	
    chords = removeNulls(chords);

    //adds all user-input chords' notes to an array
    for (k = 0; k < chords.length; k++) 
    {
        if (chords[k].includes("7"))
        {
            var temp = chords[k].replace("7", "");
            allNotesInChords = allNotesInChords.concat(get7thChord(temp));
        }
        else if (chords[k].includes("m"))
        {
            allNotesInChords = allNotesInChords.concat(getMinorChord(chords[k]));
        }
        else
        {
            allNotesInChords = allNotesInChords.concat(getMajorChord(chords[k]));
        }
    }
    
    for (i = 0; i < chords.length; i++) 
    {
        //removes minor abbreviations from chord values
        if (chords[i].includes("m") || chords[i].includes("7")) 
        {
            chords[i] = chords[i].charAt(0); 
        }     
    }
    
    //keep only unique chord values
    chords = keepUniques(chords);
    chords = removeNulls(chords);

    //grabs every scale for the root of each chord in chords array
    //grabs notes for each scale
	for (k = 0; k < chords.length; k++)
	{   
		getMajorScale = getScalePattern(chords[k], "major");
		getHarmonicMinorScale = getScalePattern(chords[k], "harmonic");
		getNaturalMinorScale = getScalePattern(chords[k], "natural");
        getMelodicMinorScale = getScalePattern(chords[k], "melodic");
        
        //compares user-input chord notes with scale notes
        //scale notes have spacing removed
        for (i = 0; i < allNotesInChords.length; i++)
        {
            for (j = 0; j < getMajorScale.length-1; j++)
            {
                if (allNotesInChords[i] == getMajorScale[j].replace(/\s+/g, ''))
                {
                    majorCount++;
                }
                if (allNotesInChords[i] == getHarmonicMinorScale[j].replace(/\s+/g, ''))
                {
                    harmonicMinorCount++;
                }
                if (allNotesInChords[i] == getNaturalMinorScale[j].replace(/\s+/g, ''))
                {
                    naturalMinorCount++;
                }
                if (allNotesInChords[i] == getMelodicMinorScale[j].replace(/\s+/g, ''))
                {
                    melodicMinorCount++;
                }
            }
        }
        
        //resets scale note arrays
        getMajorScale = getHarmonicMinorScale = getNaturalMinorScale = getMelodicMinorScale = [];
        
        //sets the root and rank of each scale per root
        root[k] = chords[k];
        majorRank[k] = majorCount/allNotesInChords.length;
        naturalMinorRank[k] = naturalMinorCount/allNotesInChords.length;
        harmonicMinorRank[k] = harmonicMinorCount/allNotesInChords.length;
        melodicMinorRank[k] = melodicMinorCount/allNotesInChords.length;
        
        //resets counts to 0
        majorCount = harmonicMinorCount = melodicMinorCount = naturalMinorCount = 0;
    }
	
	for (i = 0; i < root.length; i++)
	{
		if (majorRank[i] === 1)
		{
            document.getElementById("result2").innerHTML = "Your root is " + root[i] + " major!";
            perfectMatchFound = true;
		}
		if (naturalMinorRank[i] === 1)
		{
            document.getElementById("result2").innerHTML = "Your root is " + root[i] + " natural minor!";
            perfectMatchFound = true;
		}
		if (harmonicMinorRank[i] === 1)
		{
            document.getElementById("result2").innerHTML = "Your root is " + root[i] + " harmonic minor!";
            perfectMatchFound = true;
		}
		if (melodicMinorRank[i] === 1)
		{
            document.getElementById("result2").innerHTML = "Your root is " + root[i] + " melodic minor!";
            perfectMatchFound = true;
		}
    }

    if (perfectMatchFound == false)
    {
        calculateBestScaleToUse(root, majorRank, naturalMinorRank, harmonicMinorRank, melodicMinorRank);
    }
}

function getAllNotes()
{
   var allNotes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#",
		"A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
    
    return allNotes;
}

function parseChord()
{
    var chord = document.getElementById("chord1").value;
    if (chord.includes("7"))
    {
        document.getElementById("result2").innerHTML = get7thChord(chord);
    }
    else if (chord.includes("m"))
    {
        document.getElementById("result2").innerHTML = getMinorChord(chord);
    }
    else
    {
        document.getElementById("result2").innerHTML = getMajorChord(chord);
    }
}

function getMajorChord(value)
{
    var pattern = [0, 4, 7];
    return tempArray = calculateChord(pattern, value);
}

function getMinorChord(value)
{
    var pattern = [0, 3, 7];
    value = value.charAt(0);
    return tempArray = calculateChord(pattern, value);
}

function get7thChord(value)
{
    if (value.includes("m"))
    {
        var pattern = [0, 3, 7, 10];
    }
    else
    {
        var pattern = [0, 4, 7, 10];
    }

    value = value.charAt(0);
    return tempArray = calculateChord(pattern, value);
}

function calculateChord(pattern, value)
{
    var allNotes = getAllNotes();
    var start = 0;
    var chordNotes = [];

    for (i = 0; i < allNotes.length; i++)
	{
		if(allNotes[i] == value)
		{
			start = i;
			break;
		}
	}
	
	for(i = 0; i < pattern.length; i++)
	{
		chordNotes[i] = allNotes[start + pattern[i]];
    }
    
	return chordNotes;
}

function calculateBestScaleToUse(root, majorRank, naturalMinorRank, harmonicMinorRank, melodicMinorRank)
{
    var bestMajorRank = 0;
    var bestNaturalMinorRank = 0;
    var bestHarmonicMinorRank = 0;
    var bestMelodicMinorRank = 0;
    var bestMajorRoot = "";
    var bestNaturalMinorRoot = "";
    var bestHarmonicMinorRoot = "";
    var bestMelodicMinorRoot = "";

    for (i = 0; i < root.length; i++)
    {
        if (bestMajorRank < majorRank[i])
        {
            bestMajorRank = majorRank[i];
            bestMajorRoot = root[i];
        }
        if (bestNaturalMinorRank < naturalMinorRank[i])
        {
            bestNaturalMinorRank = naturalMinorRank[i];
            bestNaturalMinorRoot = root[i]; 
        }
        if (bestHarmonicMinorRank < harmonicMinorRank[i])
        {
            bestHarmonicMinorRank = harmonicMinorRank[i];
            bestHarmonicMinorRoot = root[i]; 
        }
        if (bestMelodicMinorRank < melodicMinorRank[i])
        {
            bestMelodicMinorRank = melodicMinorRank[i];
            bestMelodicMinorRoot = root[i];
        }
    }

    if (bestMajorRank >= bestNaturalMinorRank && bestMajorRank >= bestHarmonicMinorRank
        && bestMajorRank >= bestMelodicMinorRoot)
    {
        document.getElementById("result2").innerHTML = "No exact match found. The closest scale is the "
        + bestMajorRoot + " major scale!";
    }
    else if (bestNaturalMinorRank >= bestMajorRank && bestNaturalMinorRank >= bestHarmonicMinorRank
        && bestNaturalMinorRank >= bestMelodicMinorRoot)
    {
        document.getElementById("result2").innerHTML = "No exact match found. The closest scale is the "
        + bestNaturalMinorRoot + " natural minor scale!";
    }
    else if (bestHarmonicMinorRank >= bestMajorRank && bestHarmonicMinorRank >= bestNaturalMinorRank
        && bestHarmonicMinorRank >= bestMelodicMinorRoot)
    {
        document.getElementById("result2").innerHTML = "No exact match found. The closest scale is the "
        + bestHarmonicMinorRoot + " harmonic minor scale!";
    }
    else
    {
        document.getElementById("result2").innerHTML = "No exact match found. The closest scale is the "
        + bestMelodicMinorRoot + " melodic minor scale!";
    }
}
