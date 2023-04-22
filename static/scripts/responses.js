function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "";
    } else if (input == "paper") {
        return "okkk";
    } else if (input == "Courses Available for spring") {
        return "aos";
    }

    // Simple responses
    if (input == "okk") {
        return "Courses";
    } else if (input == "goodbye") {
        return "";
    } else {
        return "";
    }
}