const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const arr = []
  members.forEach(e => {
    if (typeof e === "string" || e instanceof String) {
      arr.push(e[0].toUpperCase())
    }
  })
  if (arr.length === 0) return false;
  return arr.sort().join("");

}

// typeof myVar === 'string' || myVar instanceof String

// console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']))
// console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]));
module.exports = {
  createDreamTeam
};

console.log(createDreamTeam(['Peter', 'Adam', 'Gary', 'Bobby', 'Philip', 'Andrea', 'Evelyn', 'Evelyn', 'Kimberly', 'Denise']), 'AABDEEGKPP');
console.log(createDreamTeam(['Eric', 'Donald', 'Justin', 'Katherine', 'Ethan', 'Charles', 'Frances', 'Kimberly', 'Noah', 'Paul']), 'CDEEFJKKNP');
console.log(createDreamTeam(['Ann', 'Nancy', 'Nicholas', 'Alexander', 'Charles', 'Johnny', 'Philip', 'Jeffrey', 'Kenneth', 'Raymond']), 'AACJJKNNPR');
console.log(createDreamTeam(['Ann', 'Christian', 'Douglas', 'Justin', 'Eugene', 'Kayla', 'Anthony', 'Brian', 'Adam', 'Benjamin']), 'AAABBCDEJK');
console.log(createDreamTeam(['Alan', 'Gregory', 'Peter', 'Nicole', 'George', 'Helen', 'Denise', 'Amy', 'Danielle', 'Heather']), 'AADDGGHHNP');
console.log(createDreamTeam(['Joan', 'Gregory', 'Abigail', 'Brittany', 'Nicole', 'Sophia', 'Joyce', 'Juan', 'Julie', 'Joan']), 'ABGJJJJJNS');
console.log(createDreamTeam(['Alice', 'Joe', 'Janet', 'Pamela', 'Jacob', 'Larry', 'Diana', 'Gerald', 'Douglas', 'Keith']), 'ADDGJJJKLP');
console.log(createDreamTeam(['Karen', 'Andrea', 'Brandon', 'Lawrence', 'Megan', 'Alexis', 'Ann', 'Kathryn', 'Sharon', 'Jonathan']), 'AAABJKKLMS');
console.log(createDreamTeam(['Kayla', 'Bryan', 'Sharon', 'Anna', 'Bruce', 'Bobby', 'Lauren', 'Kathleen', 'Joshua', 'Andrew']), 'AABBBJKKLS');
console.log(createDreamTeam(['Carolyn', 'Olivia', 'Gary', 'Ethan', 'Dorothy', 'Kelly', 'Sean', 'Jose', 'Christopher', 'Judy']), 'CCDEGJJKOS');
console.log(createDreamTeam(['Dylan', 'Keith', 'Madison', 'Ralph', 'Olivia', 'Raymond', 'Megan', 'Frank', 'Daniel', 'Carol']), 'CDDFKMMORR');
console.log(createDreamTeam(['Gregory', 'Kayla', 'Kevin', 'Benjamin', 'Randy', 'Sandra', 'Alan', 'Patrick', 'Angela', 'Katherine']), 'AABGKKKPRS');
console.log(createDreamTeam(['Evelyn', 'Wayne', 'Ryan', 'Abigail', 'Theresa', 'Jack', 'Austin', 'Willie', 'Judith', 'Stephen']), 'AAEJJRSTWW');
console.log(createDreamTeam(['Teresa', 'Austin', 'Betty', 'Evelyn', 'Samantha', 'Noah', 'Christina', 'Christian', 'Anthony', 'Jose']), 'AABCCEJNST');
console.log(createDreamTeam(['Ann', 'Sean', 'Kathleen', 'Harold', 'Beverly', 'Anna', 'Lawrence', 'Diane', 'Jesse', 'Amber']), 'AAABDHJKLS');
console.log(createDreamTeam(['Austin', 'Jordan', 'Olivia', 'Joyce', 'Eugene', 'Noah', 'Zachary', 'Emily', 'Megan', 'Nathan']), 'AEEJJMNNOZ');
console.log(createDreamTeam(['Diane', 'Denise', 'Olivia', 'Nancy', 'Ashley', 'Bruce', 'Maria', 'Megan', 'Gerald', 'Megan']), 'ABDDGMMMNO');
console.log(createDreamTeam(['Pamela', 'Ryan', 'Stephen', 'Anthony', 'Beverly', 'Evelyn', 'Amanda', 'Jesse', 'Ruth', 'Joshua']), 'AABEJJPRRS');
console.log(createDreamTeam(['Christian', 'Sophia', 'Sandra', 'Jerry', 'Gregory', 'Jonathan', 'Joshua', 'Theresa', 'Rebecca', 'Rose']), 'CGJJJRRSST');
console.log(createDreamTeam(['Lori', 'Jack', 'Nathan', 'Kathryn', 'Sharon', 'Joan', 'Stephanie', 'Donna', 'Christina', 'Donald']), 'CDDJJKLNSS');
console.log(createDreamTeam(['Diana', 'Philip', 'Joe', 'Nicole', 'Nicholas', 'Aaron', 'Jane', 'Eric', 'Andrew', 'Jose']), 'AADEJJJNNP');
console.log(createDreamTeam(['Kayla', 'Keith', 'Dennis', 'Carolyn', 'Diane', 'Timothy', 'Sandra', 'Laura', 'Bryan', 'Heather']), 'BCDDHKKLST');
console.log(createDreamTeam(['Diana', 'Frances', 'Emma', 'Christopher', 'Kathleen', 'Lori', 'Brittany', 'Cynthia', 'Dorothy', 'Grace']), 'BCCDDEFGKL');
console.log(createDreamTeam(['Grace', 'Sharon', 'Ethan', 'Jonathan', 'Emily', 'Nicholas', 'Victoria', 'Lawrence', 'Beverly', 'Victoria']), 'BEEGJLNSVV');
console.log(createDreamTeam(['Bobby', 'Kevin', 'Teresa', 'Betty', 'Lori', 'Joyce', 'Scott', 'Johnny', 'Cheryl', 'Ronald']), 'BBCJJKLRST');
console.log(createDreamTeam(['Patrick', 'Gerald', 'Sophia', 'Nicholas', 'Jesse', 'Zachary', 'Nicole', 'Aaron', 'George', 'Nathan']), 'AGGJNNNPSZ');
console.log(createDreamTeam(['Russell', 'Willie', 'Sophia', 'Gabriel', 'Jane', 'Gabriel', 'Samuel', 'Jesse', 'Timothy', 'Eugene']), 'EGGJJRSSTW');
console.log(createDreamTeam(['Henry', 'Peter', 'Amber', 'Jordan', 'Lauren', 'Andrew', 'Emma', 'Gregory', 'Kayla', 'Deborah']), 'AADEGHJKLP');
console.log(createDreamTeam(['Dennis', 'Kimberly', 'Bryan', 'Kyle', 'Gregory', 'Ruth', 'Christina', 'Vincent', 'Noah', 'Cheryl']), 'BCCDGKKNRV');
console.log(createDreamTeam(['Ryan', 'Keith', 'Deborah', 'Jerry', 'Gerald', 'Janet', 'Jacqueline', 'Philip', 'Heather', 'Harold']), 'DGHHJJJKPR');
console.log(createDreamTeam(['Christina', 'Austin', 'Alice', 'Beverly', 'Margaret', 'Jordan', 'Janet', 'Gregory', 'Betty', 'Cynthia']), 'AABBCCGJJM');
console.log(createDreamTeam(['Madison', 'Walter', 'Nancy', 'Gloria', 'Kevin', 'Gabriel', 'Helen', 'Juan', 'Sandra', 'Brenda']), 'BGGHJKMNSW');
console.log(createDreamTeam(['Peter', 'Heather', 'Philip', 'Hannah', 'Amy', 'Mark', 'Karen', 'Betty', 'Karen', 'Christina']), 'ABCHHKKMPP');
console.log(createDreamTeam(['Natalie', 'Jordan', 'Jordan', 'Christine', 'Ashley', 'Shirley', 'Gary', 'Cynthia', 'Juan', 'Theresa']), 'ACCGJJJNST');
console.log(createDreamTeam(['Kathleen', 'Bruce', 'Nancy', 'Evelyn', 'Carl', 'Judy', 'Natalie', 'Keith', 'Jack', 'Grace']), 'BCEGJJKKNN');
console.log(createDreamTeam(['Sandra', 'Stephen', 'Angela', 'Frances', 'Amber', 'Diana', 'Ronald', 'Louis', 'Judy', 'Jack']), 'AADFJJLRSS');
console.log(createDreamTeam(['Andrea', 'Carol', 'Katherine', 'Evelyn', 'Donald', 'Stephanie', 'Sharon', 'Aaron', 'Jose', 'Evelyn']), 'AACDEEJKSS');
console.log(createDreamTeam(['Marilyn', 'Adam', 'Charles', 'Lisa', 'Bryan', 'Aaron', 'Marie', 'Christine', 'Nicole', 'Catherine']), 'AABCCCLMMN');
console.log(createDreamTeam(['Theresa', 'Jeffrey', 'Justin', 'Brenda', 'Sharon', 'Teresa', 'Janet', 'Jack', 'Gerald', 'Amber']), 'ABGJJJJSTT');
console.log(createDreamTeam(['Rachel', 'Samantha', 'Alan', 'Carol', 'Jeremy', 'Bruce', 'Carol', 'Steven', 'Christopher', 'Jacqueline']), 'ABCCCJJRSS');
console.log(createDreamTeam(['Lawrence', 'Noah', 'Paul', 'Megan', 'Carol', 'Kathryn', 'Ralph', 'Eugene', 'Timothy', 'Janet']), 'CEJKLMNPRT');
console.log(createDreamTeam(['Patrick', 'Gabriel', 'Amber', 'Jacqueline', 'Katherine', 'Kelly', 'Christian', 'Evelyn', 'Billy', 'Lauren']), 'ABCEGJKKLP');
console.log(createDreamTeam(['Olivia', 'Stephen', 'Tyler', 'Nicole', 'Jordan', 'Ruth', 'Lisa', 'Kathleen', 'Jordan', 'Angela']), 'AJJKLNORST');
console.log(createDreamTeam(['Peter', 'Brian', 'Ashley', 'Patrick', 'Austin', 'Lisa', 'Margaret', 'Austin', 'Nancy', 'Eric']), 'AAABELMNPP');
console.log(createDreamTeam(['Jeffrey', 'Mark', 'Nicholas', 'Hannah', 'Lauren', 'Evelyn', 'Mark', 'Adam', 'Catherine', 'Samuel']), 'ACEHJLMMNS');
console.log(createDreamTeam(['Frances', 'Karen', 'Laura', 'Jonathan', 'Andrew', 'Debra', 'Philip', 'Jonathan', 'Peter', 'Donna']), 'ADDFJJKLPP');
console.log(createDreamTeam(['Scott', 'Mark', 'Lawrence', 'Theresa', 'Logan', 'Ronald', 'Sara', 'Jeremy', 'Alexander', 'Ryan']), 'AJLLMRRSST');
console.log(createDreamTeam(['Carol', 'Ethan', 'Katherine', 'Amanda', 'Olivia', 'Marilyn', 'Jean', 'Madison', 'Karen', 'Cynthia']), 'ACCEJKKMMO');
console.log(createDreamTeam(['Nathan', 'Sophia', 'Cheryl', 'Nathan', 'Austin', 'Dorothy', 'Jesse', 'Marilyn', 'Gary', 'Carl']), 'ACCDGJMNNS');
console.log(createDreamTeam(['Carolyn', 'Gabriel', 'Henry', 'Madison', 'Heather', 'Lori', 'Cheryl', 'Benjamin', 'Jean', 'Cynthia']), 'BCCCGHHJLM');
console.log(createDreamTeam(['Angela', 'Denise', 'Kayla', 'Eugene', 'Tyler', 'Jeffrey', 'Kathryn', 'Stephen', 'Ethan', 'Jeremy']), 'ADEEJJKKST');
console.log(createDreamTeam(['Edward', 'Carl', 'Joyce', 'Cheryl', 'Gary', 'Henry', 'Philip', 'Christina', 'Edward', 'Nicholas']), 'CCCEEGHJNP');
console.log(createDreamTeam(['Emma', 'Danielle', 'Albert', 'Justin', 'Edward', 'Douglas', 'Alexander', 'Alan', 'Terry', 'Mark']), 'AAADDEEJMT');
console.log(createDreamTeam(['Austin', 'Eric', 'Catherine', 'Theresa', 'Kathleen', 'Nicole', 'Alexis', 'Nathan', 'Jacob', 'Johnny']), 'AACEJJKNNT');
console.log(createDreamTeam(['Bruce', 'Mark', 'Marilyn', 'Kyle', 'Carolyn', 'Marie', 'Kenneth', 'Lawrence', 'Matthew', 'Christine']), 'BCCKKLMMMM');
console.log(createDreamTeam(['Emma', 'Christian', 'Alan', 'Beverly', 'Nathan', 'Peter', 'Catherine', 'Brenda', 'Andrea', 'Logan']), 'AABBCCELNP');
console.log(createDreamTeam(['Raymond', 'Bruce', 'Emily', 'Jacob', 'Nancy', 'Lori', 'Kathryn', 'Vincent', 'Raymond', 'Janet']), 'BEJJKLNRRV');
console.log(createDreamTeam(['Kayla', 'Karen', 'Dylan', 'Debra', 'Kayla', 'Janet', 'Lauren', 'Louis', 'Hannah', 'Nathan']), 'DDHJKKKLLN');
console.log(createDreamTeam(['Carolyn', 'Logan', 'Mark', 'Maria', 'Bryan', 'Laura', 'Danielle', 'Michelle', 'Eric', 'Debra']), 'BCDDELLMMM');
console.log(createDreamTeam(['Nicole', 'George', 'Charles', 'Megan', 'Andrea', 'Judy', 'Peter', 'Matthew', 'Helen', 'Christina']), 'ACCGHJMMNP');
console.log(createDreamTeam(['Sandra', 'Shirley', 'Katherine', 'Kyle', 'Katherine', 'Sean', 'Jonathan', 'Alice', 'Adam', 'Kyle']), 'AAJKKKKSSS');
console.log(createDreamTeam(['Dylan', 'Arthur', 'Laura', 'Betty', 'Anthony', 'Stephanie', 'Alan', 'Marie', 'Samantha', 'Adam']), 'AAAABDLMSS');
console.log(createDreamTeam(['Danielle', 'Albert', 'Jesse', 'Grace', 'Vincent', 'Margaret', 'Alan', 'Jose', 'Emily', 'Heather']), 'AADEGHJJMV');
console.log(createDreamTeam(['Ann', 'Louis', 'Kevin', 'Jeffrey', 'Jerry', 'Gary', 'Louis', 'Andrew', 'Janice', 'Austin']), 'AAAGJJJKLL');
console.log(createDreamTeam(['Frank', 'Carolyn', 'Stephen', 'Shirley', 'Carl', 'Anthony', 'Madison', 'Anna', 'Roger', 'Jerry']), 'AACCFJMRSS');
console.log(createDreamTeam(['Christopher', 'Zachary', 'Frank', 'Michelle', 'Cynthia', 'Nathan', 'Deborah', 'Hannah', 'Jane', 'Gary']), 'CCDFGHJMNZ');
console.log(createDreamTeam(['Kelly', 'Austin', 'Frances', 'Frances', 'Christian', 'Douglas', 'Andrew', 'Andrew', 'Diana', 'Raymond']), 'AAACDDFFKR');
console.log(createDreamTeam(['Cynthia', 'Sharon', 'Jesse', 'Eric', 'Abigail', 'Judy', 'Jonathan', 'Joe', 'Cynthia', 'Ann']), 'AACCEJJJJS');
console.log(createDreamTeam(['Theresa', 'Cynthia', 'Kayla', 'Evelyn', 'Aaron', 'Joshua', 'Kyle', 'Dylan', 'Betty', 'Ann']), 'AABCDEJKKT');
console.log(createDreamTeam(['Deborah', 'Ruth', 'Betty', 'Stephanie', 'Anna', 'Judy', 'Jeremy', 'Abigail', 'Ronald', 'Christine']), 'AABCDJJRRS');
console.log(createDreamTeam(['George', 'Brian', 'Christine', 'Charles', 'Bruce', 'Philip', 'Johnny', 'Steven', 'Brandon', 'Mark']), 'BBBCCGJMPS');
console.log(createDreamTeam(['Kathleen', 'Zachary', 'Ryan', 'Martha', 'Marilyn', 'Laura', 'Bruce', 'Olivia', 'Donald', 'Deborah']), 'BDDKLMMORZ');
console.log(createDreamTeam(['Julia', 'Marie', 'Lawrence', 'Melissa', 'Mark', 'Teresa', 'Alice', 'Scott', 'Edward', 'Gregory']), 'AEGJLMMMST');
console.log(createDreamTeam(['Johnny', 'Margaret', 'Sharon', 'Julie', 'Gloria', 'Danielle', 'Cheryl', 'Betty', 'Joe', 'Stephen']), 'BCDGJJJMSS');
console.log(createDreamTeam(['Ruth', 'Johnny', 'Noah', 'Nicholas', 'Jesse', 'Hannah', 'Shirley', 'Bobby', 'Roy', 'Raymond']), 'BHJJNNRRRS');
console.log(createDreamTeam(['Mark', 'Catherine', 'Alan', 'Aaron', 'Betty', 'Kathryn', 'Jesse', 'Christine', 'Danielle', 'Evelyn']), 'AABCCDEJKM');
console.log(createDreamTeam(['Patrick', 'Daniel', 'Bryan', 'Rebecca', 'Debra', 'Angela', 'Juan', 'Kelly', 'Olivia', 'Diana']), 'ABDDDJKOPR');
console.log(createDreamTeam(['Raymond', 'Kevin', 'Roy', 'Paul', 'Laura', 'Samuel', 'Jack', 'Sara', 'Julia', 'Janice']), 'JJJKLPRRSS');
console.log(createDreamTeam(['Willie', 'Debra', 'Daniel', 'Vincent', 'Carolyn', 'Jason', 'Brenda', 'Joe', 'Brandon', 'Lawrence']), 'BBCDDJJLVW');
console.log(createDreamTeam(['Philip', 'Tyler', 'Jacob', 'Samantha', 'Beverly', 'Doris', 'Jordan', 'Melissa', 'Brittany', 'Nicole']), 'BBDJJMNPST');
console.log(createDreamTeam(['Karen', 'Theresa', 'Marie', 'Jacob', 'Douglas', 'Evelyn', 'Sharon', 'George', 'Madison', 'Kayla']), 'DEGJKKMMST');
console.log(createDreamTeam(['Jose', 'Daniel', 'Emma', 'Nancy', 'Janice', 'Martha', 'Jane', 'Betty', 'Nicholas', 'Kyle']), 'BDEJJJKMNN');
console.log(createDreamTeam(['Vincent', 'Karen', 'Bruce', 'Nancy', 'Christina', 'Edward', 'Amber', 'Debra', 'George', 'Lori']), 'ABCDEGKLNV');
console.log(createDreamTeam(['Ethan', 'Donna', 'Vincent', 'Timothy', 'Edward', 'Eric', 'Hannah', 'Henry', 'Lori', 'Joyce']), 'DEEEHHJLTV');
console.log(createDreamTeam(['Kathleen', 'Julie', 'Noah', 'Dylan', 'Sandra', 'Heather', 'Diana', 'Melissa', 'Aaron', 'Terry']), 'ADDHJKMNST');
console.log(createDreamTeam(['Paul', 'Roger', 'Marilyn', 'Victoria', 'Amber', 'Vincent', 'Sandra', 'Benjamin', 'Sean', 'Kyle']), 'ABKMPRSSVV');
console.log(createDreamTeam(['Helen', 'Deborah', 'Bradley', 'Sandra', 'Michelle', 'Shirley', 'Theresa', 'Brenda', 'Lisa', 'Anna']), 'ABBDHLMSST');
console.log(createDreamTeam(['Donald', 'Bruce', 'Edward', 'Kimberly', 'Randy', 'Rebecca', 'Alice', 'Katherine', 'Alan', 'Samantha']), 'AABDEKKRRS');
console.log(createDreamTeam(['Frank', 'Jonathan', 'Ethan', 'Helen', 'Jordan', 'Ashley', 'Bradley', 'Jane', 'Gregory', 'Pamela']), 'ABEFGHJJJP');
console.log(createDreamTeam(['Lauren', 'Sean', 'Laura', 'Nancy', 'Roy', 'Samuel', 'Hannah', 'Sandra', 'Shirley', 'Eugene']), 'EHLLNRSSSS');
console.log(createDreamTeam(['Abigail', 'Vincent', 'Jacob', 'Sean', 'Brian', 'Donna', 'Bryan', 'Stephen', 'Ruth', 'Gabriel']), 'ABBDGJRSSV');
console.log(createDreamTeam(['Catherine', 'Walter', 'Rachel', 'Brandon', 'Lori', 'Kimberly', 'Keith', 'Brandon', 'Johnny', 'Anna']), 'ABBCJKKLRW');
console.log(createDreamTeam(['Laura', 'Stephanie', 'Lisa', 'Steven', 'Rebecca', 'Dorothy', 'Peter', 'Matthew', 'Logan', 'Frank']), 'DFLLLMPRSS');
console.log(createDreamTeam(['Brenda', 'Terry', 'Karen', 'Deborah', 'Samantha', 'Roy', 'Helen', 'Victoria', 'Adam', 'Michelle']), 'ABDHKMRSTV');
console.log(createDreamTeam(['Martha', 'Melissa', 'Terry', 'Pamela', 'Lawrence', 'Russell', 'Stephen', 'Heather', 'Walter', 'Amy']), 'AHLMMPRSTW');
console.log(createDreamTeam(['Kayla', 'Brian', 'Logan', 'Sharon', 'Ruth', 'Jean', 'Joyce', 'Sara', 'Diana', 'Edward']), 'BDEJJKLRSS');
console.log(createDreamTeam(['Keith', 'Donna', 'Lawrence', 'Sophia', 'Jack', 'Kyle', 'Andrew', 'Natalie', 'Deborah', 'Noah']), 'ADDJKKLNNS');
console.log(createDreamTeam(['Sophia', 'Margaret', 'Maria', 'Wayne', 'Julie', 'Samantha', 'Deborah', 'Diana', 'Bruce', 'Jacob']), 'BDDJJMMSSW');
console.log(createDreamTeam(['Kevin', 'Timothy', 'Jeffrey', 'Albert', 'Laura', 'Karen', 'Steven', 'Diana', 'Sandra', 'Emma']), 'ADEJKKLSST');
