export interface Question {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  questions: Question[];
}

export const categories: Category[] = [
  // {
  //   id: 'science',
  //   name: 'Science',
  //   description: 'Test your knowledge of physics, chemistry, and biology',
  //   icon: 'Atom',
  //   color: 'emerald',
  //   questions: [
  //     {
  //       question: 'What is the chemical symbol for gold?',
  //       options: ['Go', 'Au', 'Gd', 'Ag'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'What is the speed of light in a vacuum (approximately)?',
  //       options: ['300,000 km/s', '150,000 km/s', '1,000,000 km/s', '30,000 km/s'],
  //       correctIndex: 0,
  //     },
  //     {
  //       question: 'Which planet is known as the Red Planet?',
  //       options: ['Venus', 'Jupiter', 'Mars', 'Saturn'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'What is the most abundant gas in Earth\'s atmosphere?',
  //       options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'What is the powerhouse of the cell?',
  //       options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi apparatus'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'Who proposed the theory of general relativity?',
  //       options: ['Isaac Newton', 'Albert Einstein', 'Niels Bohr', 'Galileo Galilei'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'What is the atomic number of hydrogen?',
  //       options: ['1', '2', '3', '4'],
  //       correctIndex: 0,
  //     },
  //     {
  //       question: 'What type of energy is stored in a stretched rubber band?',
  //       options: ['Kinetic energy', 'Thermal energy', 'Potential energy', 'Chemical energy'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'Which scientist is credited with the laws of motion?',
  //       options: ['Albert Einstein', 'Isaac Newton', 'Stephen Hawking', 'Charles Darwin'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'What is the pH level of pure water?',
  //       options: ['0', '7', '14', '1'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'What is the hardest natural substance on Earth?',
  //       options: ['Gold', 'Iron', 'Diamond', 'Quartz'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'What gas do plants absorb from the atmosphere for photosynthesis?',
  //       options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'What is the smallest unit of matter that retains the properties of an element?',
  //       options: ['Molecule', 'Atom', 'Cell', 'Electron'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'Which blood type is considered the universal donor?',
  //       options: ['A+', 'B+', 'O-', 'AB+'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'What is the largest organ in the human body?',
  //       options: ['Liver', 'Brain', 'Skin', 'Lungs'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'What force opposes motion between two surfaces in contact?',
  //       options: ['Gravity', 'Friction', 'Magnetism', 'Tension'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'What is the boiling point of water at sea level in Celsius?',
  //       options: ['50°C', '75°C', '100°C', '120°C'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'Which element has the chemical symbol "Fe"?',
  //       options: ['Fluorine', 'Iron', 'Francium', 'Fermium'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'What is the process by which a solid turns directly into a gas?',
  //       options: ['Evaporation', 'Condensation', 'Sublimation', 'Melting'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'How many bones are there in the adult human body?',
  //       options: ['106', '206', '306', '186'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'What is the nearest star to Earth (excluding the Sun)?',
  //       options: ['Sirius', 'Betelgeuse', 'Proxima Centauri', 'Polaris'],
  //       correctIndex: 2,
  //     },
  //   ],
  // },
  // {
  //   id: 'history',
  //   name: 'History',
  //   description: 'Journey through the events that shaped our world',
  //   icon: 'Scroll',
  //   color: 'amber',
  //   questions: [
  //     {
  //       question: 'In which year did World War II end?',
  //       options: ['1943', '1945', '1947', '1950'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'Who was the first President of the United States?',
  //       options: ['Thomas Jefferson', 'John Adams', 'George Washington', 'Benjamin Franklin'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'The Great Wall of China was primarily built to defend against which group?',
  //       options: ['Mongols', 'Japanese', 'Russians', 'Koreans'],
  //       correctIndex: 0,
  //     },
  //     {
  //       question: 'Which ancient civilization built the pyramids of Giza?',
  //       options: ['Romans', 'Greeks', 'Egyptians', 'Persians'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'Who was the first Emperor of Rome?',
  //       options: ['Julius Caesar', 'Augustus', 'Nero', 'Caligula'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'In which year did the Berlin Wall fall?',
  //       options: ['1987', '1989', '1991', '1993'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'Who painted the ceiling of the Sistine Chapel?',
  //       options: ['Leonardo da Vinci', 'Raphael', 'Michelangelo', 'Donatello'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'Which country was formerly known as Persia?',
  //       options: ['Iraq', 'Iran', 'Turkey', 'Syria'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'Who discovered America in 1492?',
  //       options: ['Vasco da Gama', 'Christopher Columbus', 'Ferdinand Magellan', 'James Cook'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'The French Revolution began in which year?',
  //       options: ['1776', '1789', '1799', '1804'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'Who was known as the "Iron Lady" of Britain?',
  //       options: ['Queen Elizabeth II', 'Theresa May', 'Margaret Thatcher', 'Indira Gandhi'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'Which empire was ruled by Genghis Khan?',
  //       options: ['Ottoman Empire', 'Mongol Empire', 'Roman Empire', 'Persian Empire'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'In which year did the Titanic sink?',
  //       options: ['1905', '1912', '1918', '1923'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'Who was the leader of the Soviet Union during World War II?',
  //       options: ['Vladimir Lenin', 'Joseph Stalin', 'Nikita Khrushchev', 'Leonid Brezhnev'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'The Renaissance began in which country?',
  //       options: ['France', 'England', 'Italy', 'Spain'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'Who wrote the "I Have a Dream" speech?',
  //       options: ['Malcolm X', 'Frederick Douglass', 'Martin Luther King Jr.', 'Rosa Parks'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'Which war was fought between the North and South regions of the United States?',
  //       options: ['War of 1812', 'American Civil War', 'Revolutionary War', 'Mexican-American War'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'Nelson Mandela became president of which country in 1994?',
  //       options: ['Kenya', 'Nigeria', 'South Africa', 'Egypt'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'The ancient city of Rome was built on how many hills?',
  //       options: ['5', '7', '9', '12'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'Who was the last Tsar of Russia?',
  //       options: ['Alexander III', 'Nicholas II', 'Peter the Great', 'Ivan the Terrible'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'In which year did India gain independence from Britain?',
  //       options: ['1945', '1947', '1950', '1952'],
  //       correctIndex: 1,
  //     },
  //   ],
  // },
  // {
  //   id: 'geography',
  //   name: 'Geography',
  //   description: 'Explore the world\'s countries, capitals, and landscapes',
  //   icon: 'Globe',
  //   color: 'blue',
  //   questions: [
  //     {
  //       question: 'What is the capital city of Australia?',
  //       options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'Which is the largest country in the world by area?',
  //       options: ['China', 'USA', 'Canada', 'Russia'],
  //       correctIndex: 3,
  //     },
  //     {
  //       question: 'The Amazon River flows mainly through which country?',
  //       options: ['Peru', 'Brazil', 'Colombia', 'Argentina'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'What is the smallest country in the world?',
  //       options: ['Monaco', 'Vatican City', 'San Marino', 'Liechtenstein'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'Which desert is the largest in the world?',
  //       options: ['Sahara Desert', 'Gobi Desert', 'Antarctic Desert', 'Kalahari Desert'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'What is the capital of Japan?',
  //       options: ['Osaka', 'Kyoto', 'Tokyo', 'Nagoya'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'Which mountain is the tallest in the world?',
  //       options: ['K2', 'Mount Everest', 'Kangchenjunga', 'Makalu'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'The Great Barrier Reef is located off the coast of which country?',
  //       options: ['Indonesia', 'Philippines', 'Australia', 'New Zealand'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'Which continent is the Sahara Desert located in?',
  //       options: ['Asia', 'Africa', 'South America', 'Australia'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'What is the longest river in the world?',
  //       options: ['Amazon River', 'Nile River', 'Yangtze River', 'Mississippi River'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'Which country has the most natural lakes?',
  //       options: ['USA', 'Russia', 'Canada', 'Finland'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'What is the capital of Canada?',
  //       options: ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'Which ocean is the largest?',
  //       options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
  //       correctIndex: 3,
  //     },
  //     {
  //       question: 'Mount Kilimanjaro is located in which country?',
  //       options: ['Kenya', 'Tanzania', 'Ethiopia', 'Uganda'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'Which country is known as the Land of the Rising Sun?',
  //       options: ['China', 'Thailand', 'Japan', 'South Korea'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'What is the capital of Brazil?',
  //       options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'The Caspian Sea is bordered by how many countries?',
  //       options: ['3', '4', '5', '6'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'Which European country is shaped like a boot?',
  //       options: ['Spain', 'Greece', 'Italy', 'Portugal'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'Lake Baikal, the world\'s deepest lake, is in which country?',
  //       options: ['Mongolia', 'Russia', 'China', 'Kazakhstan'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'What is the only country that borders both the Atlantic and Indian Oceans?',
  //       options: ['Australia', 'South Africa', 'India', 'Madagascar'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'Which strait separates Asia from North America?',
  //       options: ['Strait of Gibraltar', 'Bering Strait', 'Strait of Hormuz', 'Bosphorus'],
  //       correctIndex: 1,
  //     },
  //   ],
  // },
  // {
  //   id: 'sports',
  //   name: 'Sports',
  //   description: 'Challenge yourself with questions from the world of sports',
  //   icon: 'Trophy',
  //   color: 'rose',
  //   questions: [
  //     {
  //       question: 'How many players are on a soccer team on the field?',
  //       options: ['9', '10', '11', '12'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'In which sport would you perform a slam dunk?',
  //       options: ['Volleyball', 'Basketball', 'Tennis', 'Football'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'How many rings are on the Olympic flag?',
  //       options: ['4', '5', '6', '7'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'In tennis, what is a score of zero called?',
  //       options: ['Nil', 'Love', 'Zero', 'Duck'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'Which country won the first FIFA World Cup in 1930?',
  //       options: ['Brazil', 'Argentina', 'Uruguay', 'Italy'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'How many periods are there in an ice hockey game?',
  //       options: ['2', '3', '4', '5'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'In golf, what is it called when you complete a hole one stroke under par?',
  //       options: ['Eagle', 'Birdie', 'Bogey', 'Albatross'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'Which sport uses terms like "spare" and "strike"?',
  //       options: ['Cricket', 'Bowling', 'Baseball', 'Darts'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'How many players are on a basketball team on the court?',
  //       options: ['4', '5', '6', '7'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'In which sport is the "Tour de France" a major event?',
  //       options: ['Running', 'Cycling', 'Swimming', 'Driving'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'What color is the bull\'s eye in standard archery?',
  //       options: ['Red', 'Blue', 'Yellow', 'Green'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'How many bases are there in baseball?',
  //       options: ['2', '3', '4', '5'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'In boxing, what is a knockout abbreviated as?',
  //       options: ['KO', 'TKO', 'KD', 'KO/TKO'],
  //       correctIndex: 0,
  //     },
  //     {
  //       question: 'Which sport is associated with Wimbledon?',
  //       options: ['Golf', 'Tennis', 'Cricket', 'Rugby'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'How many players are on a volleyball team on the court?',
  //       options: ['5', '6', '7', '8'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'In American football, how many points is a touchdown worth?',
  //       options: ['3', '6', '7', '8'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'Which martial art originated in Korea?',
  //       options: ['Karate', 'Judo', 'Taekwondo', 'Kung Fu'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'What is the national sport of Japan?',
  //       options: ['Karate', 'Judo', 'Kendo', 'Sumo Wrestling'],
  //       correctIndex: 3,
  //     },
  //     {
  //       question: 'In cricket, how many runs is a boundary hit along the ground worth?',
  //       options: ['2', '4', '6', '8'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'Which NFL team has won the most Super Bowls?',
  //       options: ['Dallas Cowboys', 'Pittsburgh Steelers', 'New England Patriots', 'San Francisco 49ers'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'How often are the Summer Olympic Games held?',
  //       options: ['Every 2 years', 'Every 3 years', 'Every 4 years', 'Every 5 years'],
  //       correctIndex: 2,
  //     },
  //   ],
  // },
  // {
  //   id: 'movies',
  //   name: 'Movies',
  //   description: 'Lights, camera, action! Test your film knowledge',
  //   icon: 'Clapperboard',
  //   color: 'purple',
  //   questions: [
  //     {
  //       question: 'Who directed the movie "Jaws" (1975)?',
  //       options: ['George Lucas', 'Steven Spielberg', 'Martin Scorsese', 'Francis Ford Coppola'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'Which movie features the character "Jack Dawson"?',
  //       options: ['The Great Gatsby', 'Titanic', 'Inception', 'Shutter Island'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'What is the highest-grossing film of all time (as of 2023)?',
  //       options: ['Titanic', 'Avengers: Endgame', 'Avatar', 'Star Wars: The Force Awakens'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'Who played the Joker in "The Dark Knight" (2008)?',
  //       options: ['Jared Leto', 'Joaquin Phoenix', 'Heath Ledger', 'Jack Nicholson'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'In which movie would you find the character "Forrest Gump"?',
  //       options: ['The Green Mile', 'Forrest Gump', 'Cast Away', 'Big'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'Which Pixar movie features a rat who loves cooking?',
  //       options: ['Up', 'Ratatouille', 'Brave', 'Coco'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'Who directed "Pulp Fiction"?',
  //       options: ['Quentin Tarantino', 'Robert Rodriguez', 'Martin Scorsese', 'Guy Ritchie'],
  //       correctIndex: 0,
  //     },
  //     {
  //       question: 'Which movie won the Best Picture Oscar in 2020?',
  //       options: ['1917', 'Joker', 'Parasite', 'Once Upon a Time in Hollywood'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'Who played Iron Man in the Marvel Cinematic Universe?',
  //       options: ['Chris Evans', 'Chris Hemsworth', 'Robert Downey Jr.', 'Mark Ruffalo'],
  //       correctIndex: 2,
  //     },
  //     {
  //       question: 'In "The Matrix," what color pill does Neo take?',
  //       options: ['Blue', 'Red', 'Green', 'Yellow'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'Which animated film features a character named "Woody"?',
  //       options: ['Shrek', 'Toy Story', 'Frozen', 'Moana'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'Who directed "The Godfather"?',
  //       options: ['Martin Scorsese', 'Francis Ford Coppola', 'Brian De Palma', 'Ridley Scott'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'Which movie features the song "My Heart Will Go On"?',
  //       options: ['Moulin Rouge', 'Titanic', 'The Bodyguard', 'Ghost'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'In which year was "Star Wars: A New Hope" released?',
  //       options: ['1975', '1977', '1979', '1981'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'Who played Hermione Granger in the Harry Potter films?',
  //       options: ['Emma Stone', 'Emma Watson', 'Bonnie Wright', 'Evanna Lynch'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'Which movie is about a robot named WALL-E?',
  //       options: ['Big Hero 6', 'WALL-E', 'Robots', 'Real Steel'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'Who directed "Inception" and "Interstellar"?',
  //       options: ['Christopher Nolan', 'Steven Spielberg', 'Ridley Scott', 'James Cameron'],
  //       correctIndex: 0,
  //     },
  //     {
  //       question: 'Which film features the quote "I\'ll be back"?',
  //       options: ['Die Hard', 'The Terminator', 'Predator', 'Commando'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'What is the name of the fictional African country in "Black Panther"?',
  //       options: ['Zamunda', 'Wakanda', 'Narnia', 'Genovia'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'Which actor played Jack Sparrow in "Pirates of the Caribbean"?',
  //       options: ['Orlando Bloom', 'Johnny Depp', 'Geoffrey Rush', 'Ian McKellen'],
  //       correctIndex: 1,
  //     },
  //     {
  //       question: 'Which 1999 film features a character who creates a club in a basement?',
  //       options: ['Office Space', 'Fight Club', 'American Beauty', 'The Matrix'],
  //       correctIndex: 1,
  //     },
  //   ],
  // },
  {
    id: 'technology',
    name: 'Technology',
    description: 'From computers to the internet, test your tech IQ',
    icon: 'Cpu',
    color: 'cyan',
    questions: [
      {
        question: 'What does "HTTP" stand for?',
        options: ['HyperText Transfer Protocol', 'High Transfer Text Protocol', 'HyperText Transmission Process', 'Hyperlink Transfer Text Protocol'],
        correctIndex: 0,
      },
      {
        question: 'Who is the co-founder of Microsoft?',
        options: ['Steve Jobs', 'Bill Gates', 'Mark Zuckerberg', 'Larry Page'],
        correctIndex: 1,
      },
      {
        question: 'What does "CPU" stand for?',
        options: ['Central Processing Unit', 'Computer Personal Unit', 'Central Process Utility', 'Core Processing Unit'],
        correctIndex: 0,
      },
      {
        question: 'Which company created the iPhone?',
        options: ['Samsung', 'Google', 'Apple', 'Nokia'],
        correctIndex: 2,
      },
      {
        question: 'What does "AI" stand for in technology?',
        options: ['Automated Intelligence', 'Artificial Intelligence', 'Advanced Integration', 'Applied Informatics'],
        correctIndex: 1,
      },
      {
        question: 'Which programming language is primarily used for web styling?',
        options: ['HTML', 'CSS', 'JavaScript', 'Python'],
        correctIndex: 1,
      },
      {
        question: 'What does "URL" stand for?',
        options: ['Universal Resource Locator', 'Uniform Resource Locator', 'Unified Reference Link', 'Universal Reference Locator'],
        correctIndex: 1,
      },
      {
        question: 'Who founded Tesla, Inc. (originally Tesla Motors)?',
        options: ['Elon Musk', 'Martin Eberhard', 'JB Straubel', 'Ian Wright'],
        correctIndex: 1,
      },
      {
        question: 'What is the binary equivalent of the decimal number 10?',
        options: ['1100', '1010', '1001', '1110'],
        correctIndex: 1,
      },
      {
        question: 'Which company developed the Android operating system?',
        options: ['Apple', 'Microsoft', 'Google', 'Samsung'],
        correctIndex: 2,
      },
      {
        question: 'What does "RAM" stand for?',
        options: ['Read Access Memory', 'Random Access Memory', 'Rapid Access Module', 'Read-Write Access Memory'],
        correctIndex: 1,
      },
      {
        question: 'In which year was the first iPhone released?',
        options: ['2005', '2007', '2009', '2010'],
        correctIndex: 1,
      },
      {
        question: 'What does "SQL" stand for?',
        options: ['Structured Query Language', 'Simple Query Language', 'Standard Query Logic', 'System Query Language'],
        correctIndex: 0,
      },
      {
        question: 'Which protocol is used for sending emails?',
        options: ['HTTP', 'FTP', 'SMTP', 'SNMP'],
        correctIndex: 2,
      },
      {
        question: 'What is the most popular programming language for data science?',
        options: ['Java', 'C++', 'Python', 'Ruby'],
        correctIndex: 2,
      },
      {
        question: 'What does "GPS" stand for?',
        options: ['Global Positioning System', 'General Positioning Service', 'Global Position Service', 'General Position System'],
        correctIndex: 0,
      },
      {
        question: 'Which company owns WhatsApp?',
        options: ['Google', 'Apple', 'Meta (Facebook)', 'Microsoft'],
        correctIndex: 2,
      },
      {
        question: 'What does "SSD" stand for in computer storage?',
        options: ['Solid State Drive', 'Super Speed Disk', 'Storage State Drive', 'Solid Storage Disk'],
        correctIndex: 0,
      },
      {
        question: 'Which search engine was created by Larry Page and Sergey Brin?',
        options: ['Bing', 'Yahoo', 'Google', 'DuckDuckGo'],
        correctIndex: 2,
      },
      {
        question: 'What does "API" stand for?',
        options: ['Application Programming Interface', 'Application Process Integration', 'Automated Programming Interface', 'Advanced Protocol Interface'],
        correctIndex: 0,
      },
      {
        question: 'Which tech company is known for its "Think Different" slogan?',
        options: ['IBM', 'Apple', 'Microsoft', 'Dell'],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'programming',
    name: 'Programming',
    description: 'Test your knowledge of languages, concepts, and code',
    icon: 'Code2',
    color: 'indigo',
    questions: [
      {
        question: 'Which programming language is known as the "mother of all languages"?',
        options: ['Python', 'C', 'Assembly', 'Fortran'],
        correctIndex: 1,
      },
      {
        question: 'What does "OOP" stand for?',
        options: ['Object Oriented Programming', 'Online Operation Protocol', 'Open Output Process', 'Ordered Object Protocol'],
        correctIndex: 0,
      },
      {
        question: 'Which symbol is used for single-line comments in JavaScript?',
        options: ['#', '//', '--', ';'],
        correctIndex: 1,
      },
       {
        question: 'What does "OOP" stand for?',
        options: ['Object Oriented Programming', 'Online Operation Protocol', 'Open Output Process', 'Ordered Object Protocol'],
        correctIndex: 0,
      },
      {
        question: 'Which symbol is used for single-line comments in JavaScript?',
        options: ['#', '//', '--', ';'],
        correctIndex: 1,
      },
      {
        question: 'Which keyword is used to define a function in Python?',
        options: ['function', 'def', 'func', 'fn'],
        correctIndex: 1,
      },
      {
        question: 'What is the time complexity of binary search?',
        options: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'],
        correctIndex: 2,
      },
      {
        question: 'Which data structure operates on a LIFO (Last In, First Out) principle?',
        options: ['Queue', 'Stack', 'Array', 'Linked List'],
        correctIndex: 1,
      },
      {
        question: 'What does "DRY" stand for in software development?',
        options: ['Do Repeat Yourself', 'Don\'t Repeat Yourself', 'Direct Read Yield', 'Data Request Yield'],
        correctIndex: 1,
      },
      {
        question: 'Which language is primarily used for Android app development?',
        options: ['Swift', 'Kotlin', 'Ruby', 'PHP'],
        correctIndex: 1,
      },
      {
        question: 'What is the entry point function in a C program?',
        options: ['start()', 'begin()', 'main()', 'init()'],
        correctIndex: 2,
      },
      {
        question: 'Which keyword is used to declare a constant in JavaScript (ES6+)?',
        options: ['var', 'let', 'const', 'static'],
        correctIndex: 2,
      },
      {
        question: 'Which sorting algorithm has the best average time complexity?',
        options: ['Bubble Sort O(n²)', 'Quick Sort O(n log n)', 'Selection Sort O(n²)', 'Insertion Sort O(n²)'],
        correctIndex: 1,
      },
      {
        question: 'What does "JSON" stand for?',
        options: ['JavaScript Object Notation', 'Java Standard Object Name', 'JavaScript Ordered Notation', 'Java Source Object Notation'],
        correctIndex: 0,
      },
      {
        question: 'Which operator is used for equality comparison in JavaScript (strict)?',
        options: ['==', '===', '=', '!='],
        correctIndex: 1,
      },
      {
        question: 'What is a "closure" in JavaScript?',
        options: ['A way to close the browser', 'A function with access to its outer scope', 'A method to terminate a loop', 'A type of error handler'],
        correctIndex: 1,
      },
      {
        question: 'Which language is known as a "statically typed" language?',
        options: ['Python', 'JavaScript', 'Java', 'Ruby'],
        correctIndex: 2,
      },
      {
        question: 'What does "npm" stand for in the Node.js ecosystem?',
        options: ['Node Package Manager', 'Network Protocol Module', 'New Project Maker', 'Node Process Manager'],
        correctIndex: 0,
      },
      {
        question: 'Which data structure uses FIFO (First In, First Out)?',
        options: ['Stack', 'Queue', 'Tree', 'Heap'],
        correctIndex: 1,
      },
      {
        question: 'What is "recursion" in programming?',
        options: ['A loop that runs forever', 'A function that calls itself', 'A type of variable', 'A sorting method'],
        correctIndex: 1,
      },
      {
        question: 'Which language was created by Guido van Rossum?',
        options: ['Ruby', 'Python', 'Go', 'Rust'],
        correctIndex: 1,
      },
      {
        question: 'What does "IDE" stand for?',
        options: ['Integrated Development Environment', 'Internal Debug Engine', 'Interface Design Editor', 'Interactive Data Environment'],
        correctIndex: 0,
      },
      {
        question: 'Which symbol is used to access a pointer\'s value in C?',
        options: ['&', '*', '#', '@'],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'git',
    name: 'Git',
    description: 'Version control, branching, merging, and more',
    icon: 'GitBranch',
    color: 'orange',
    questions: [
      {
        question: 'Who created Git?',
        options: ['Bill Gates', 'Linus Torvalds', 'Steve Jobs', 'Guido van Rossum'],
        correctIndex: 1,
      },
      {
        question: 'Which command initializes a new Git repository?',
        options: ['git start', 'git init', 'git create', 'git new'],
        correctIndex: 1,
      },
      {
        question: 'What command is used to stage files for a commit?',
        options: ['git stage', 'git add', 'git push', 'git track'],
        correctIndex: 1,
      },
      {
        question: 'Which command creates a new commit with a message?',
        options: ['git commit -m "message"', 'git save -m "message"', 'git store -m "message"', 'git write -m "message"'],
        correctIndex: 0,
      },
      {
        question: 'What does "git push" do?',
        options: ['Saves changes locally', 'Uploads local commits to a remote repository', 'Deletes a branch', 'Merges two branches'],
        correctIndex: 1,
      },
      {
        question: 'Which command shows the commit history?',
        options: ['git history', 'git log', 'git show', 'git list'],
        correctIndex: 1,
      },
      {
        question: 'What is a "branch" in Git?',
        options: ['A type of commit', 'A parallel line of development', 'A remote server', 'A type of merge conflict'],
        correctIndex: 1,
      },
      {
        question: 'Which command creates and switches to a new branch?',
        options: ['git branch -new <name>', 'git switch -c <name>', 'git checkout -b <name>', 'Both B and C'],
        correctIndex: 3,
      },
      {
        question: 'What does "git merge" do?',
        options: ['Combines two commits into one', 'Combines changes from one branch into another', 'Deletes a branch', 'Creates a tag'],
        correctIndex: 1,
      },
      {
        question: 'Which command is used to clone a remote repository?',
        options: ['git copy', 'git clone', 'git fetch', 'git download'],
        correctIndex: 1,
      },
      {
        question: 'What is a "pull request"?',
        options: ['A request to pull code from a server', 'A proposal to merge changes from one branch into another', 'A command to download updates', 'A type of Git error'],
        correctIndex: 1,
      },
      {
        question: 'Which command discards changes in the working directory?',
        options: ['git discard', 'git checkout -- <file>', 'git remove', 'git undo'],
        correctIndex: 1,
      },
      {
        question: 'What does "git fetch" do?',
        options: ['Downloads changes from remote without merging', 'Merges remote changes automatically', 'Pushes local changes', 'Creates a new branch'],
        correctIndex: 0,
      },
      {
        question: 'Which file is used to specify files Git should ignore?',
        options: ['.gitignore', '.ignore', '.gitconfig', '.gitexclude'],
        correctIndex: 0,
      },
      {
        question: 'What is "git stash" used for?',
        options: ['Permanently saving changes', 'Temporarily saving uncommitted changes', 'Deleting changes', 'Creating a backup branch'],
        correctIndex: 1,
      },
      {
        question: 'Which command undoes the last commit but keeps the changes?',
        options: ['git undo', 'git reset --soft HEAD~1', 'git revert HEAD', 'git rollback'],
        correctIndex: 1,
      },
      {
        question: 'What is a "merge conflict"?',
        options: ['When two branches have the same name', 'When Git cannot automatically resolve differing changes', 'When a push fails', 'When a branch is deleted'],
        correctIndex: 1,
      },
      {
        question: 'Which command lists all branches?',
        options: ['git branches', 'git branch -l', 'git branch', 'git list-branches'],
        correctIndex: 2,
      },
      {
        question: 'What does "git rebase" do?',
        options: ['Deletes old commits', 'Reapplies commits on top of another base branch', 'Merges without conflicts', 'Creates a backup'],
        correctIndex: 1,
      },
      {
        question: 'Which command tags a specific commit?',
        options: ['git tag <name>', 'git mark <name>', 'git label <name>', 'git flag <name>'],
        correctIndex: 0,
      },
      {
        question: 'What is the default branch name in most Git repositories?',
        options: ['master', 'main', 'trunk', 'primary'],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'devops',
    name: 'DevOps',
    description: 'Continuous integration, deployment, and operations',
    icon: 'Server',
    color: 'teal',
    questions: [
      {
        question: 'What does "CI/CD" stand for in DevOps?',
        options: ['Continuous Integration / Continuous Deployment', 'Code Integration / Code Deployment', 'Continuous Improvement / Continuous Delivery', 'Code Inspection / Code Distribution'],
        correctIndex: 0,
      },
      {
        question: 'Which tool is commonly used for containerization?',
        options: ['Docker', 'Kubernetes', 'Ansible', 'Terraform'],
        correctIndex: 0,
      },
    ]
  },
];
