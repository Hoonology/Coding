function test1(score) {
    if (score < 0 || score > 100) {
      return 'INVALID SCORE';
    }
    if (score >= 90) {
      if (score >= 98) {
        return 'A+';
      } else if (score <= 92) {
        return 'A-';
      } else {
        return 'A';
      }
   } else if (score >= 80) {
      if (score >= 88) {
        return 'B+';
      } else if (score <= 82) {
        return 'B-';
      } else {
        return 'B';
      }
    } else if (score >= 70) {
      if (score >= 78) {
        return 'C+';
      } else if (score <= 72) {
        return 'C-';
      } else {
        return 'C';
      }
    } else if (score >= 60) {
      if (score >= 68) {
        return 'D+';
      } else if (score <= 62) {
        return 'D-';
      } else {
        return 'D';
      }
    } else {
      return 'F';
    }
  }
  
  