export function score(rank, percent, minPercent) {
    if (rank > 10000) {
        return 0;
    }
    if (rank > 75 && percent < 100) {
        return 0;
    }

    // UPDATED FORMULA HERE
    let score = (420 * Math.exp(-0.009 * (rank - 1))) *
        ((percent - (minPercent - 1)) / (100 - (minPercent - 1)));

    score = Math.max(0, score);

    if (percent != 100) {
        return round(score - score / 3);
    }

    return Math.max(round(score), 0);
}
ts = 420 * Math.exp(-0.009 * (rank - 1));
    let score = basePoints * ((percent - (minPercent - 1)) / (100 - (minPercent - 1)));

    score = Math.max(0, score);

    if (percent != 100) {
        return round(score * (2 / 3));
    }

    return Math.max(round(score), 0);
}
