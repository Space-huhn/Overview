module.exports = () => {
  const names = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan", "Abbas", "Aiadan", "Aidan", "Aiden", "Aiden-Jack", "Aiden-Vee", "Aidian", "Aidy", "Ailin", "Aiman", "Ainsley", "Ainslie", "Airen", "Airidas", "Airlie", "AJ", "Ajay", "A-Jay", "Ajayraj", "Akan", "Akram", "Al", "Ala", "Alan", "Alanas", "Alasdair", "Alastair", "Alber", "Albert", "Albie", "Aldred", "Alec", "Aled", "Aleem", "Aleksandar", "Aleksander", "Aleksandr", "Aleksandrs", "Alekzander", "Alessandro", "Alessio", "Alex", "Alexander", "Alexei", "Alexx", "Alexzander", "Alf", "Alfee", "Alfie", "Alfred", "Alfy", "Alhaji", "Al-Hassan", "Ali", "Aliekber", "Alieu", "Alihaider", "Alisdair", "Alishan", "Alistair", "Alistar", "Alister", "Aliyaan", "Allan", "Allan-Laiton", "Allen", "Allesandro", "Allister", "Ally", "Alphonse", "Altyiab", "Alum", "Alvern", "Alvin", "Alyas", "Amaan", "Aman", "Amani", "Ambanimoh", "Ameer", "Amgad", "Ami", "Amin", "Amir", "Ammaar", "Ammar", "Ammer", "Amolpreet", "Amos", "Amrinder", "Amrit", "Amro", "Anay", "Andrea", "Andreas", "Andrei", "Andrejs", "Andrew", "Andy", "Anees", "Anesu", "Angel", "Angelo", "Angus", "Anir", "Anis", "Anish", "Anmolpreet", "Annan", "Anndra", "Anselm", "Anthony", "Anthony-John", "Antoine", "Anton", "Antoni", "Antonio", "Antony", "Antonyo", "Anubhav", "Aodhan", "Aon", "Aonghus", "Apisai", "Arafat", "Aran", "Arandeep", "Arann", "Aray", "Arayan", "Archibald", "Archie", "Arda", "Ardal", "Ardeshir", "Areeb", "Areez", "Aref", "Arfin", "Argyle", "Argyll", "Ari", "Aria", "Arian", "Arihant", "Aristomenis", "Aristotelis", "Arjuna", "Arlo", "Armaan", "Arman", "Armen", "Arnab", "Arnav", "Arnold", "Aron", "Aronas", "Arran", "Arrham", "Arron", "Arryn", "Arsalan", "Artem", "Arthur", "Artur", "Arturo", "Arun", "Arunas", "Arved", "Arya", "Aryan", "Aryankhan", "Aryian", "Aryn", "Asa", "Asfhan", "Ash", "Ashlee-jay", "Ashley", "Ashton", "Ashton-Lloyd", "Ashtyn", "Ashwin", "Asif", "Asim", "Aslam", "Asrar", "Ata", "Atal", "Atapattu", "Ateeq", "Athol", "Athon", "Athos-Carlos", "Atli", "Atom", "Attila", "Aulay", "Aun", "Austen", "Austin", "Avani", "Averon", "Avi", "Avinash", "Avraham", "Awais", "Awwal", "Axel", "Ayaan", "Ayan", "Aydan", "Ayden", "Aydin", "Aydon", "Ayman", "Ayomide", "Ayren", "Ayrton", "Aytug", "Ayub", "Ayyub", "Azaan", "Azedine", "Azeem", "Azim", "Aziz", "Azlan", "Azzam", "Azzedine", "Babatunmise", "Babur", "Bader", "Badr", "Badsha", "Bailee", "Bailey", "Bailie", "Bailley", "Baillie", "Baley", "Balian", "Banan", "Barath", "Barkley", "Barney", "Baron", "Barrie", "Barry", "Bartlomiej", "Bartosz", "Basher", "Basile", "Baxter", "Baye", "Bayley", "Beau", "Beinn", "Bekim", "Believe", "Ben", "Bendeguz", "Benedict", "Benjamin", "Benjamyn", "Benji", "Benn", "Bennett", "Benny", "Benoit", "Bentley", "Berkay", "Bernard", "Bertie", "Bevin", "Bezalel", "Bhaaldeen", "Bharath", "Bilal", "Bill", "Billy", "Binod", "Bjorn", "Blaike", "Blaine", "Blair", "Blaire", "Blake", "Blazej", "Blazey", "Blessing", "Blue", "Blyth", "Bo", "Boab", "Bob", "Bobby", "Bobby-Lee", "Bodhan", "Boedyn", "Bogdan", "Bohbi", "Bony", "Bowen", "Bowie", "Boyd", "Bracken", "Brad", "Bradan", "Braden", "Bradley", "Bradlie", "Bradly", "Brady", "Bradyn", "Braeden", "Braiden", "Brajan", "Brandan", "Branden", "Brandon", "Brandonlee", "Brandon-Lee", "Brandyn", "Brannan", "Brayden", "Braydon", "Braydyn", "Breandan", "Brehme", "Brendan", "Brendon", "Brendyn", "Breogan", "Bret", "Brett", "Briaddon", "Brian", "Brodi", "Brodie", "Brody", "Brogan", "Broghan", "Brooke", "Brooklin", "Brooklyn", "Bruce", "Bruin", "Bruno", "Brunon", "Bryan", "Bryce", "Bryden", "Brydon", "Brydon-Craig", "Bryn", "Brynmor", "Bryson", "Buddy", "Bully", "Burak", "Burhan", "Butali", "Butchi", "Byron", "Cabhan", "Cadan", "Cade", "Caden", "Cadon", "Cadyn", "Caedan", "Caedyn", "Cael", "Caelan", "Caelen", "Caethan", "Cahl", "Cahlum", "Cai", "Caidan", "Caiden", "Caiden-Paul", "Caidyn", "Caie", "Cailaen", "Cailean", "Caileb-John", "Cailin", "Cain", "Caine", "Cairn", "Cal", "Calan", "Calder", "Cale", "Calean", "Caleb", "Calen", "Caley", "Calib", "Calin", "Callahan", "Callan", "Callan-Adam", "Calley", "Callie", "Callin", "Callum", "Callun", "Callyn", "Calum", "Calum-James", "Calvin", "Cambell", "Camerin", "Cameron", "Campbel", "Campbell", "Camron", "Caolain", "Caolan", "Carl", "Carlo", "Carlos", "Carrich", "Carrick", "Carson", "Carter", "Carwyn", "Casey", "Casper", "Cassy", "Cathal", "Cator", "Cavan", "Cayden", "Cayden-Robert", "Cayden-Tiamo", "Ceejay", "Ceilan", "Ceiran", "Ceirin", "Ceiron", "Cejay", "Celik", "Cephas", "Cesar", "Cesare", "Chad", "Chaitanya", "Chang-Ha", "Charles", "Charley", "Charlie", "Charly", "Chase", "Che", "Chester", "Chevy", "Chi", "Chibudom", "Chidera", "Chimsom", "Chin", "Chintu", "Chiqal", "Chiron", "Chris", "Chris-Daniel", "Chrismedi", "Christian", "Christie", "Jahy", "Jai", "Jaida", "Jaiden", "Jaidyn", "Jaii", "Jaime", "Jai-Rajaram", "Jaise", "Jak", "Jake", "Jakey", "Jakob", "Jaksyn", "Jakub", "Jamaal", "Jamal", "Jameel", "Jameil", "James", "James-Paul", "Jamey", "Jamie", "Jan", "Jaosha", "Jardine", "Jared", "Jarell", "Jarl", "Jarno", "Jarred", "Jarvi", "Jasey-Jay", "Jasim", "Jaskaran", "Jason", "Jasper", "Jaxon", "Jaxson", "Jay", "Jaydan", "Jayden", "Jayden-James", "Jayden-Lee", "Jayden-Paul", "Jayden-Thomas", "Jaydn", "Jaydon", "Jaydyn", "Jayhan", "Jay-Jay", "Jayke", "Jaymie", "Jayse", "Jayson", "Jaz", "Jazeb", "Jazib", "Jazz", "Jean", "Jean-Lewis", "Jean-Pierre", "Jebadiah", "Jed", "Jedd", "Jedidiah", "Jeemie", "Jeevan", "Jeffrey", "Jensen", "Jenson", "Jensyn", "Jeremy", "Jerome", "Jeronimo", "Jerrick", "Jerry", "Jesse", "Jesuseun", "Jeswin", "Jevan", "Jeyun", "Jez", "Jia", "Jian", "Jiao", "Jimmy", "Jincheng", "JJ", "Joaquin", "Joash", "Jock", "Jody", "Joe", "Joeddy", "Joel", "Joey", "Joey-Jack", "Johann", "Johannes", "Johansson", "John", "Johnathan", "Johndean", "Johnjay", "John-Michael", "Johnnie", "Johnny", "Johnpaul", "John-Paul", "John-Scott", "Johnson", "Jole", "Jomuel", "Jon", "Jonah", "Jonatan", "Jonathan", "Jonathon", "Jonny", "Jonothan", "Jon-Paul", "Jonson", "Joojo", "Jordan", "Jordi", "Jordon", "Jordy", "Jordyn", "Jorge", "Joris", "Jorryn", "Josan", "Josef", "Joseph", "Josese", "Josh", "Joshiah", "Joshua", "Josiah", "Joss", "Jostelle", "Joynul", "Juan", "Jubin", "Judah", "Jude", "Jules", "Julian", "Julien", "Jun", "Junior", "Jura", "Justan", "Justin", "Justinas", "Kaan", "Kabeer", "Kabir", "Kacey", "Kacper", "Kade", "Kaden", "Kadin", "Kadyn", "Kaeden", "Kael", "Kaelan", "Kaelin", "Kaelum", "Kai", "Kaid", "Kaidan", "Kaiden", "Kaidinn", "Kaidyn", "Kaileb", "Kailin", "Kain", "Kaine", "Kainin", "Kainui", "Kairn", "Kaison", "Kaiwen", "Kajally", "Kajetan", "Kalani", "Kale", "Kaleb", "Kaleem", "Kal-el", "Kalen", "Kalin", "Kallan", "Kallin", "Kalum", "Kalvin", "Kalvyn", "Kameron", "Kames", "Kamil", "Kamran", "Kamron", "Kane", "Karam", "Karamvir", "Karandeep", "Kareem", "Karim", "Karimas", "Karl", "Karol", "Karson", "Karsyn", "Karthikeya", "Kasey", "Kash", "Kashif", "Kasim", "Kasper", "Kasra", "Kavin", "Kayam", "Kaydan", "Kayden", "Kaydin", "Kaydn", "Kaydyn", "Kaydyne", "Kayleb", "Kaylem", "Kaylum", "Kayne", "Kaywan", "Kealan", "Kealon", "Kean", "Keane", "Kearney", "Keatin", "Keaton", "Keavan", "Keayn", "Kedrick", "Keegan", "Keelan", "Keelin", "Keeman", "Keenan", "Keenan-Lee", "Keeton", "Kehinde", "Keigan", "Keilan", "Keir", "Keiran", "Keiren", "Keiron", "Keiryn", "Keison", "Keith", "Keivlin", "Kelam", "Kelan", "Kellan", "Kellen", "Kelso", "Kelum", "Kelvan", "Kelvin", "Ken", "Kenan", "Kendall", "Kendyn", "Kenlin", "Kenneth", "Kensey", "Kenton", "Kenyon", "Kenzeigh", "Kenzi", "Kenzie", "Kenzo", "Kenzy", "Keo", "Ker", "Kern", "Kerr", "Kevan", "Kevin", "Kevyn", "Kez", "Khai", "Khalan", "Khaleel", "Khaya", "Khevien", "Khizar", "Khizer", "Kia", "Kian", "Kian-James", "Kiaran", "Kiarash", "Kie", "Kiefer", "Kiegan", "Kienan", "Kier", "Kieran", "Kieran-Scott", "Kieren", "Kierin", "Kiern", "Kieron", "Kieryn", "Kile", "Killian", "Kimi", "Kingston", "Kinneil", "Kinnon", "Kinsey", "Kiran", "Kirk", "Kirwin", "Kit", "Kiya", "Kiyonari", "Kjae", "Klein", "Klevis", "Kobe", "Kobi", "Koby", "Koddi", "Koden", "Kodi", "Kodie", "Kody", "Kofi", "Kogan", "Kohen", "Kole", "Konan", "Konar", "Konnor", "Konrad", "Koray", "Korben", "Korbyn", "Korey", "Kori", "Korrin", "Kory", "Koushik", "Kris", "Krish", "Krishan", "Kriss", "Kristian", "Kristin", "Kristofer", "Kristoffer", "Kristopher", "Kruz", "Krzysiek", "Krzysztof", "Ksawery", "Ksawier", "Kuba", "Kurt", "Kurtis", "Kurtis-Jae", "Kyaan", "Kyan", "Kyde", "Kyden", "Kye", "Kyel", "Kyhran", "Kyie", "Kylan", "Kylar", "Kyle", "Kyle-Derek", "Kylian", "Kym", "Kynan", "Kyral", "Kyran", "Kyren", "Kyrillos", "Kyro", "Kyron", "Reo", "Reuben", "Rexford", "Reynold", "Rhein", "Rheo", "Rhett", "Rheyden", "Rhian", "Rhoan", "Rholmark", "Rhoridh", "Rhuairidh", "Rhuan", "Rhuaridh", "Rhudi", "Rhy", "Rhyan", "Rhyley", "Rhyon", "Rhys", "Rhys-Bernard", "Rhyse", "Riach", "Rian", "Ricards", "Riccardo", "Ricco", "Rice", "Richard", "Richey", "Richie", "Ricky", "Rico", "Ridley", "Ridwan", "Rihab", "Rihan", "Rihards", "Rihonn", "Rikki", "Riley", "Rio", "Rioden", "Rishi", "Ritchie", "Rivan", "Riyadh", "Riyaj", "Roan", "Roark", "Roary", "Rob", "Robbi", "Robbie", "Robbie-lee", "Robby", "Robert", "Robert-Gordon", "Robertjohn", "Robi", "Robin", "Rocco", "Roddy", "Roderick", "Rodrigo", "Roen", "Rogan", "Roger", "Rohaan", "Rohan", "Rohin", "Rohit", "Rokas", "Roman", "Ronald", "Ronan", "Ronan-Benedict", "Ronin", "Ronnie", "Rooke", "Roray", "Rori", "Rorie", "Rory", "Roshan", "Ross", "Ross-Andrew", "Rossi", "Rowan", "Rowen", "Roy", "Ruadhan", "Ruaidhri", "Ruairi", "Ruairidh", "Ruan", "Ruaraidh", "Ruari", "Ruaridh", "Ruben", "Rubhan", "Rubin", "Rubyn", "Rudi", "Rudy", "Rufus", "Rui", "Ruo", "Rupert", "Ruslan", "Russel", "Russell", "Ryaan", "Ryan", "Ryan-Lee", "Ryden", "Ryder", "Ryese", "Ryhs", "Rylan", "Rylay", "Rylee", "Ryleigh", "Ryley", "Rylie", "Ryo", "Ryszard", "Saad", "Sabeen", "Sachkirat", "Saffi", "Saghun", "Sahaib", "Sahbian", "Sahil", "Saif", "Saifaddine", "Saim", "Sajid", "Sajjad", "Salahudin", "Salman", "Salter", "Salvador", "Sam", "Saman", "Samar", "Samarjit", "Samatar", "Sambrid", "Sameer", "Sami", "Samir", "Sami-Ullah", "Samual", "Samuel", "Samuela", "Samy", "Sanaullah", "Sandro", "Sandy", "Sanfur", "Sanjay", "Santiago", "Santino", "Satveer", "Saul", "Saunders", "Savin", "Sayad", "Sayeed", "Sayf", "Scot", "Scott", "Scott-Alexander", "Seaan", "Seamas", "Seamus", "Sean", "Seane", "Sean-James", "Sean-Paul", "Sean-Ray", "Seb", "Sebastian", "Sebastien", "Selasi", "Seonaidh", "Sephiroth", "Sergei", "Sergio", "Seth", "Sethu", "Seumas", "Shaarvin", "Shadow", "Shae", "Shahmir", "Shai", "Shane", "Shannon", "Sharland", "Sharoz", "Shaughn", "Shaun", "Shaunpaul", "Shaun-Paul", "Shaun-Thomas", "Shaurya", "Shaw", "Shawn", "Shawnpaul", "Shay", "Shayaan", "Shayan", "Shaye", "Shayne", "Shazil", "Shea", "Sheafan", "Sheigh", "Shenuk", "Sher", "Shergo", "Sheriff", "Sherwyn", "Shiloh", "Shiraz", "Shreeram", "Shreyas", "Shyam", "Siddhant", "Siddharth", "Sidharth", "Sidney", "Siergiej", "Silas", "Simon", "Sinai", "Skye", "Sofian", "Sohaib", "Sohail", "Soham", "Sohan", "Sol", "Solomon", "Sonneey", "Sonni", "Sonny", "Sorley", "Soul", "Spencer", "Spondon", "Stanislaw", "Stanley", "Stefan", "Stefano", "Stefin", "Stephen", "Stephenjunior", "Steve", "Steven", "Steven-lee", "Stevie", "Stewart", "Stewarty", "Strachan", "Struan", "Stuart", "Su", "Subhaan", "Sudais", "Suheyb", "Suilven", "Sukhi", "Sukhpal", "Sukhvir", "Sulayman", "Sullivan", "Sultan", "Sung", "Sunny", "Suraj", "Surien", "Sweyn", "Syed", "Sylvain", "Symon", "Szymon", "Tadd", "Taddy", "Tadhg", "Taegan", "Taegen", "Tai", "Tait", "Taiwo", "Talha", "Taliesin", "Talon", "Talorcan", "Tamar", "Tamiem", "Tammam", "Tanay", "Tane", "Tanner", "Tanvir", "Tanzeel", "Taonga", "Tarik", "Tariq-Jay", "Tate", "Taylan", "Taylar", "Tayler", "Taylor", "Taylor-Jay", "Taylor-Lee", "Tayo", "Tayyab", "Tayye", "Tayyib", "Teagan", "Tee", "Teejay", "Tee-jay", "Tegan", "Teighen", "Teiyib", "Te-Jay", "Temba", "Teo", "Teodor", "Teos", "Terry", "Teydren", "Theo", "Theodore", "Thiago", "Thierry", "Thom", "Thomas", "Thomas-Jay", "Thomson", "Thorben", "Thorfinn", "Thrinei", "Thumbiko", "Tiago", "Tian", "Tiarnan", "Tibet", "Tieran", "Tiernan", "Timothy", "Timucin", "Tiree", "Tisloh", "Titi", "Titus", "Tiylar", "TJ", "Tjay", "T-Jay", "Tobey", "Tobi", "Tobias", "Tobie", "Toby", "Todd", "Tokinaga", "Toluwalase", "Tom", "Tomas", "Tomasz", "Tommi-Lee", "Tommy", "Tomson", "Tony", "Torin", "Torquil", "Torran", "Torrin", "Torsten", "Trafford", "Trai", "Travis", "Tre", "Trent", "Trey", "Tristain", "Tristan", "Troy", "Tubagus", "Turki", "Turner", "Ty", "Ty-Alexander", "Tye", "Tyelor", "Tylar", "Tyler", "Tyler-James", "Tyler-Jay", "Tyllor", "Tylor", "Tymom", "Tymon", "Tymoteusz", "Tyra", "Tyree", "Tyrnan", "Tyrone", "Tyson", "Ubaid", "Ubayd", "Uchenna", "Uilleam", "Umair", "Umar", "Umer", "Umut", "Urban", "Uri", "Usman", "Uzair", "Uzayr", "Valen", "Valentin", "Valentino", "Valery", "Valo", "Vasyl", "Vedantsinh", "Veeran", "Victor", "Victory", "Vinay", "Vince", "Vincent", "Vincenzo", "Vinh", "Vinnie", "Vithujan", "Vladimir", "Vladislav", "Vrishin", "Vuyolwethu", "Wabuya", "Wai", "Walid", "Wallace", "Walter", "Waqaas", "Warkhas", "Warren", "Warrick", "Wasif", "Wayde", "Wayne", "Wei", "Wen", "Wesley", "Wesley-Scott", "Wiktor", "Wilkie", "Will", "William", "William-John", "Willum", "Wilson", "Windsor", "Wojciech", "Woyenbrakemi", "Wyatt", "Wylie", "Wynn", "Xabier", "Xander", "Xavier", "Xiao", "Xida", "Xin", "Xue", "Yadgor", "Yago", "Yahya", "Yakup", "Yang", "Yanick", "Yann", "Yannick", "Yaseen", "Yasin", "Yasir", "Yassin", "Yoji", "Yong", "Yoolgeun", "Yorgos", "Youcef", "Yousif", "Youssef", "Yu", "Yuanyu", "Yuri", "Yusef", "Yusuf", "Yves", "Zaaine", "Zaak", "Zac", "Zach", "Zachariah", "Zacharias", "Zacharie", "Zacharius", "Zachariya", "Zachary", "Zachary-Marc", "Zachery", "Zack", "Zackary", "Zaid", "Zain", "Zaine", "Zaineddine", "Zainedin", "Zak", "Zakaria", "Zakariya", "Zakary", "Zaki", "Zakir", "Zakk", "Zamaar", "Zander", "Zane", "Zarran", "Zayd", "Zayn", "Zayne", "Ze", "Zechariah", "Zeek", "Zeeshan", "Zeid", "Zein", "Zen", "Zendel", "Zenith", "Zennon", "Zeph", "Zerah", "Zhen", "Zhi", "Zhong", "Zhuo", "Zi", "Zidane", "Zijie", "Zinedine", "Zion", "Zishan", "Ziya", "Ziyaan", "Zohaib", "Zohair", "Zoubaeir", "Zubair", "Zubayr", "Zuriel"];
  const lastNames = ['Abbott', 'Acevedo', 'Acosta', 'Adams', 'Adkins', 'Aguilar', 'Aguirre', 'Albert', 'Alexander', 'Alford', 'Allen', 'Allison', 'Alston', 'Alvarado', 'Alvarez', 'Anderson', 'Andrews', 'Anthony', 'Armstrong', 'Arnold', 'Ashley', 'Atkins', 'Atkinson', 'Austin', 'Avery', 'Avila', 'Ayala', 'Ayers', 'Bailey', 'Baird', 'Baker', 'Baldwin', 'Ball', 'Ballard', 'Banks', 'Barber', 'Barker', 'Barlow', 'Barnes', 'Barnett', 'Barr', 'Barrera', 'Barrett', 'Barron', 'Barry', 'Bartlett', 'Barton', 'Bass', 'Bates', 'Battle', 'Bauer', 'Baxter', 'Beach', 'Bean', 'Beard', 'Beasley', 'Beck', 'Becker', 'Bell', 'Bender', 'Benjamin', 'Bennett', 'Benson', 'Bentley', 'Benton', 'Berg', 'Berger', 'Bernard', 'Berry', 'Best', 'Bird', 'Bishop', 'Black', 'Blackburn', 'Blackwell', 'Blair', 'Blake', 'Blanchard', 'Blankenship', 'Blevins', 'Bolton', 'Bond', 'Bonner', 'Booker', 'Boone', 'Booth', 'Bowen', 'Bowers', 'Bowman', 'Boyd', 'Boyer', 'Boyle', 'Bradford', 'Bradley', 'Bradshaw', 'Brady', 'Branch', 'Bray', 'Brennan', 'Brewer', 'Bridges', 'Briggs', 'Bright', 'Britt', 'Brock', 'Brooks', 'Brown', 'Browning', 'Bruce', 'Bryan', 'Bryant', 'Buchanan', 'Buck', 'Buckley', 'Buckner', 'Bullock', 'Burch', 'Burgess', 'Burke', 'Burks', 'Burnett', 'Burns', 'Burris', 'Burt', 'Burton', 'Bush', 'Butler', 'Byers', 'Byrd', 'Cabrera', 'Cain', 'Calderon', 'Caldwell', 'Calhoun', 'Callahan', 'Camacho', 'Cameron', 'Campbell', 'Campos', 'Cannon', 'Cantrell', 'Cantu', 'Cardenas', 'Carey', 'Carlson', 'Carney', 'Carpenter', 'Carr', 'Carrillo', 'Carroll', 'Carson', 'Carter', 'Carver', 'Case', 'Casey', 'Cash', 'Castaneda', 'Castillo', 'Castro', 'Cervantes', 'Chambers', 'Chan', 'Chandler', 'Chaney', 'Chang', 'Chapman', 'Charles', 'Chase', 'Chavez', 'Chen', 'Cherry', 'Christensen', 'Christian', 'Church', 'Clark', 'Clarke', 'Clay', 'Clayton', 'Clements', 'Clemons', 'Cleveland', 'Cline', 'Cobb', 'Cochran', 'Coffey', 'Cohen', 'Cole', 'Coleman', 'Collier', 'Collins', 'Colon', 'Combs', 'Compton', 'Conley', 'Conner', 'Conrad', 'Contreras', 'Conway', 'Cook', 'Cooke', 'Cooley', 'Cooper', 'Copeland', 'Cortez', 'Cote', 'Cotton', 'Cox', 'Craft', 'Craig', 'Crane', 'Crawford', 'Crosby', 'Cross', 'Cruz', 'Cummings', 'Cunningham', 'Curry', 'Curtis', 'Dale', 'Dalton', 'Daniel', 'Daniels', 'Daugherty', 'Davenport', 'David', 'Davidson', 'Davis', 'Dawson', 'Day', 'Dean', 'Decker', 'Dejesus', 'Delacruz', 'Delaney', 'Deleon', 'Delgado', 'Dennis', 'Diaz', 'Dickerson', 'Dickson', 'Dillard', 'Dillon', 'Dixon', 'Dodson', 'Dominguez', 'Donaldson', 'Donovan', 'Dorsey', 'Dotson', 'Douglas', 'Downs', 'Doyle', 'Drake', 'Dudley', 'Duffy', 'Duke', 'Duncan', 'Dunlap', 'Dunn', 'Duran', 'Durham', 'Dyer', 'Eaton', 'Edwards', 'Elliott', 'Ellis', 'Ellison', 'Emerson', 'England', 'English', 'Erickson', 'Espinoza', 'Estes', 'Estrada', 'Evans', 'Everett', 'Ewing', 'Farley', 'Farmer', 'Farrell', 'Faulkner', 'Ferguson', 'Fernandez', 'Ferrell', 'Fields', 'Figueroa', 'Finch', 'Finley', 'Fischer', 'Fisher', 'Fitzgerald', 'Fitzpatrick', 'Fleming', 'Fletcher', 'Flores', 'Flowers', 'Floyd', 'Flynn', 'Foley', 'Forbes', 'Ford', 'Foreman', 'Foster', 'Fowler', 'Fox', 'Francis', 'Franco', 'Frank', 'Franklin', 'Franks', 'Frazier', 'Frederick', 'Freeman', 'French', 'Frost', 'Fry', 'Frye', 'Fuentes', 'Fuller', 'Fulton', 'Gaines', 'Gallagher', 'Gallegos', 'Galloway', 'Gamble', 'Garcia', 'Gardner', 'Garner', 'Garrett', 'Garrison', 'Garza', 'Gates', 'Gay', 'Gentry', 'George', 'Gibbs', 'Gibson', 'Gilbert', 'Giles', 'Gill', 'Gillespie', 'Gilliam', 'Gilmore', 'Glass', 'Glenn', 'Glover', 'Goff', 'Golden', 'Gomez', 'Gonzales', 'Gonzalez', 'Good', 'Goodman', 'Goodwin', 'Gordon', 'Gould', 'Graham', 'Grant', 'Graves', 'Gray', 'Green', 'Greene', 'Greer', 'Gregory', 'Griffin', 'Griffith', 'Grimes', 'Gross', 'Guerra', 'Guerrero', 'Guthrie', 'Gutierrez', 'Guy', 'Guzman', 'Hahn', 'Hale', 'Haley', 'Hall', 'Hamilton', 'Hammond', 'Hampton', 'Hancock', 'Haney', 'Hansen', 'Hanson', 'Hardin', 'Harding', 'Hardy', 'Harmon', 'Harper', 'Harrell', 'Harrington', 'Harris', 'Harrison', 'Hart', 'Hartman', 'Harvey', 'Hatfield', 'Hawkins', 'Hayden', 'Hayes', 'Haynes', 'Hays', 'Head', 'Heath', 'Hebert', 'Henderson', 'Hendricks', 'Hendrix', 'Henry', 'Hensley', 'Henson', 'Herman', 'Hernandez', 'Herrera', 'Herring', 'Hess', 'Hester', 'Hewitt', 'Hickman', 'Hicks', 'Higgins', 'Hill', 'Hines', 'Hinton', 'Hobbs', 'Hodge', 'Hodges', 'Hoffman', 'Hogan', 'Holcomb', 'Holden', 'Holder', 'Holland', 'Holloway', 'Holman', 'Holmes', 'Holt', 'Hood', 'Hooper', 'Hoover', 'Hopkins', 'Hopper', 'Horn', 'Horne', 'Horton', 'House', 'Houston', 'Howard', 'Howe', 'Howell', 'Hubbard', 'Huber', 'Hudson', 'Huff', 'Huffman', 'Hughes', 'Hull', 'Humphrey', 'Hunt', 'Hunter', 'Hurley', 'Hurst', 'Hutchinson', 'Hyde', 'Ingram', 'Irwin', 'Jackson', 'Jacobs', 'Jacobson', 'James', 'Jarvis', 'Jefferson', 'Jenkins', 'Jennings', 'Jensen', 'Jimenez', 'Johns', 'Johnson', 'Johnston', 'Jones', 'Jordan', 'Joseph', 'Joyce', 'Joyner', 'Juarez', 'Justice', 'Kane', 'Kaufman', 'Keith', 'Keller', 'Kelley', 'Kelly', 'Kemp', 'Kennedy', 'Kent', 'Kerr', 'Key', 'Kidd', 'Kim', 'King', 'Kinney', 'Kirby', 'Kirk', 'Kirkland', 'Klein', 'Kline', 'Knapp', 'Knight', 'Knowles', 'Knox', 'Koch', 'Kramer', 'Lamb', 'Lambert', 'Lancaster', 'Landry', 'Lane', 'Lang', 'Langley', 'Lara', 'Larsen', 'Larson', 'Lawrence', 'Lawson', 'Le', 'Leach', 'Leblanc', 'Lee', 'Leon', 'Leonard', 'Lester', 'Levine', 'Levy', 'Lewis', 'Lindsay', 'Lindsey', 'Little', 'Livingston', 'Lloyd', 'Logan', 'Long', 'Lopez', 'Lott', 'Love', 'Lowe', 'Lowery', 'Lucas', 'Luna', 'Lynch', 'Lynn', 'Lyons', 'Macdonald', 'Macias', 'Mack', 'Madden', 'Maddox', 'Maldonado', 'Malone', 'Mann', 'Manning', 'Marks', 'Marquez', 'Marsh', 'Marshall', 'Martin', 'Martinez', 'Mason', 'Massey', 'Mathews', 'Mathis', 'Matthews', 'Maxwell', 'May', 'Mayer', 'Maynard', 'Mayo', 'Mays', 'Mcbride', 'Mccall', 'Mccarthy', 'Mccarty', 'Mcclain', 'Mcclure', 'Mcconnell', 'Mccormick', 'Mccoy', 'Mccray', 'Mccullough', 'Mcdaniel', 'Mcdonald', 'Mcdowell', 'Mcfadden', 'Mcfarland', 'Mcgee', 'Mcgowan', 'Mcguire', 'Mcintosh', 'Mcintyre', 'Mckay', 'Mckee', 'Mckenzie', 'Mckinney', 'Mcknight', 'Mclaughlin', 'Mclean', 'Mcleod', 'Mcmahon', 'Mcmillan', 'Mcneil', 'Mcpherson', 'Meadows', 'Medina', 'Mejia', 'Melendez', 'Melton', 'Mendez', 'Mendoza', 'Mercado', 'Mercer', 'Merrill', 'Merritt', 'Meyer', 'Meyers', 'Michael', 'Middleton', 'Miles', 'Miller', 'Mills', 'Miranda', 'Mitchell', 'Molina', 'Monroe', 'Montgomery', 'Montoya', 'Moody', 'Moon', 'Mooney', 'Moore', 'Morales', 'Moran', 'Moreno', 'Morgan', 'Morin', 'Morris', 'Morrison', 'Morrow', 'Morse', 'Morton', 'Moses', 'Mosley', 'Moss', 'Mueller', 'Mullen', 'Mullins', 'Munoz', 'Murphy', 'Murray', 'Myers', 'Nash', 'Navarro', 'Neal', 'Nelson', 'Newman', 'Newton', 'Nguyen', 'Nichols', 'Nicholson', 'Nielsen', 'Nieves', 'Nixon', 'Noble', 'Noel', 'Nolan', 'Norman', 'Norris', 'Norton', 'Nunez', 'Obrien', 'Ochoa', 'Oconnor', 'Odom', 'Odonnell', 'Oliver', 'Olsen', 'Olson', 'Oneal', 'Oneil', 'Oneill', 'Orr', 'Ortega', 'Ortiz', 'Osborn', 'Osborne', 'Owen', 'Owens', 'Pace', 'Pacheco', 'Padilla', 'Page', 'Palmer', 'Park', 'Parker', 'Parks', 'Parrish', 'Parsons', 'Pate', 'Patel', 'Patrick', 'Patterson', 'Patton', 'Paul', 'Payne', 'Pearson', 'Peck', 'Pena', 'Pennington', 'Perez', 'Perkins', 'Perry', 'Peters', 'Petersen', 'Peterson', 'Petty', 'Phelps', 'Phillips', 'Pickett', 'Pierce', 'Pittman', 'Pitts', 'Pollard', 'Poole', 'Pope', 'Porter', 'Potter', 'Potts', 'Powell', 'Powers', 'Pratt', 'Preston', 'Price', 'Prince', 'Pruitt', 'Puckett', 'Pugh', 'Quinn', 'Ramirez', 'Ramos', 'Ramsey', 'Randall', 'Randolph', 'Rasmussen', 'Ratliff', 'Ray', 'Raymond', 'Reed', 'Reese', 'Reeves', 'Reid', 'Reilly', 'Reyes', 'Reynolds', 'Rhodes', 'Rice', 'Rich', 'Richard', 'Richards', 'Richardson', 'Richmond', 'Riddle', 'Riggs', 'Riley', 'Rios', 'Rivas', 'Rivera', 'Rivers', 'Roach', 'Robbins', 'Roberson', 'Roberts', 'Robertson', 'Robinson', 'Robles', 'Rocha', 'Rodgers', 'Rodriguez', 'Rodriquez', 'Rogers', 'Rojas', 'Rollins', 'Roman', 'Romero', 'Rosa', 'Rosales', 'Rosario', 'Rose', 'Ross', 'Roth', 'Rowe', 'Rowland', 'Roy', 'Ruiz', 'Rush', 'Russell', 'Russo', 'Rutledge', 'Ryan', 'Salas', 'Salazar', 'Salinas', 'Sampson', 'Sanchez', 'Sanders', 'Sandoval', 'Sanford', 'Santana', 'Santiago', 'Santos', 'Sargent', 'Saunders', 'Savage', 'Sawyer', 'Schmidt', 'Schneider', 'Schroeder', 'Schultz', 'Schwartz', 'Scott', 'Sears', 'Sellers', 'Serrano', 'Sexton', 'Shaffer', 'Shannon', 'Sharp', 'Sharpe', 'Shaw', 'Shelton', 'Shepard', 'Shepherd', 'Sheppard', 'Sherman', 'Shields', 'Short', 'Silva', 'Simmons', 'Simon', 'Simpson', 'Sims', 'Singleton', 'Skinner', 'Slater', 'Sloan', 'Small', 'Smith', 'Snider', 'Snow', 'Snyder', 'Solis', 'Solomon', 'Sosa', 'Soto', 'Sparks', 'Spears', 'Spence', 'Spencer', 'Stafford', 'Stanley', 'Stanton', 'Stark', 'Steele', 'Stein', 'Stephens', 'Stephenson', 'Stevens', 'Stevenson', 'Stewart', 'Stokes', 'Stone', 'Stout', 'Strickland', 'Strong', 'Stuart', 'Suarez', 'Sullivan', 'Summers', 'Sutton', 'Swanson', 'Sweeney', 'Sweet', 'Sykes', 'Talley', 'Tanner', 'Tate', 'Taylor', 'Terrell', 'Terry', 'Thomas', 'Thompson', 'Thornton', 'Tillman', 'Todd', 'Torres', 'Townsend', 'Tran', 'Travis', 'Trevino', 'Trujillo', 'Tucker', 'Turner', 'Tyler', 'Tyson', 'Underwood', 'Valdez', 'Valencia', 'Valentine', 'Valenzuela', 'Vance', 'Vang', 'Vargas', 'Vasquez', 'Vaughan', 'Vaughn', 'Vazquez', 'Vega', 'Velasquez', 'Velazquez', 'Velez', 'Villarreal', 'Vincent', 'Vinson', 'Wade', 'Wagner', 'Walker', 'Wall', 'Wallace', 'Waller', 'Walls', 'Walsh', 'Walter', 'Walters', 'Walton', 'Ward', 'Ware', 'Warner', 'Warren', 'Washington', 'Waters', 'Watkins', 'Watson', 'Watts', 'Weaver', 'Webb', 'Weber', 'Webster', 'Weeks', 'Weiss', 'Welch', 'Wells', 'West', 'Wheeler', 'Whitaker', 'White', 'Whitehead', 'Whitfield', 'Whitley', 'Whitney', 'Wiggins', 'Wilcox', 'Wilder', 'Wiley', 'Wilkerson', 'Wilkins', 'Wilkinson', 'William', 'Williams', 'Williamson', 'Willis', 'Wilson', 'Winters', 'Wise', 'Witt', 'Wolf', 'Wolfe', 'Wong', 'Wood', 'Woodard', 'Woods', 'Woodward', 'Wooten', 'Workman', 'Wright', 'Wyatt', 'Wynn', 'Yang', 'Yates', 'York', 'Young', 'Zamora', 'Zimmerman', 'Flynn', 'Foley', 'Forbes', 'Ford', 'Foreman', 'Foster', 'Fowler', 'Fox', 'Francis', 'Franco', 'Frank', 'Franklin', 'Franks', 'Frazier', 'Frederick', 'Freeman', 'French', 'Frost', 'Fry', 'Frye', 'Fuentes', 'Fuller', 'Fulton', 'Gaines', 'Gallagher', 'Gallegos', 'Galloway', 'Gamble', 'Garcia', 'Gardner', 'Garner', 'Garrett', 'Garrison', 'Garza', 'Gates', 'Gay', 'Gentry', 'George', 'Gibbs', 'Gibson', 'Gilbert', 'Giles', 'Gill', 'Gillespie', 'Gilliam', 'Gilmore', 'Glass', 'Glenn', 'Glover', 'Goff', 'Golden', 'Gomez', 'Gonzales', 'Gonzalez', 'Good', 'Goodman', 'Goodwin', 'Gordon', 'Gould', 'Graham', 'Grant', 'Graves', 'Gray', 'Green', 'Greene', 'Greer', 'Gregory', 'Griffin', 'Griffith', 'Grimes', 'Gross', 'Guerra', 'Guerrero', 'Guthrie', 'Gutierrez', 'Guy', 'Guzman', 'Hahn', 'Hale', 'Haley', 'Hall', 'Hamilton', 'Hammond', 'Hampton', 'Hancock', 'Haney', 'Hansen', 'Hanson', 'Hardin', 'Harding', 'Hardy', 'Harmon', 'Harper', 'Harrell', 'Harrington', 'Harris', 'Harrison', 'Hart', 'Hartman', 'Harvey', 'Hatfield', 'Hawkins', 'Hayden', 'Hayes', 'Haynes', 'Hays', 'Head', 'Heath', 'Hebert', 'Henderson', 'Hendricks', 'Hendrix', 'Henry', 'Hensley', 'Henson', 'Herman', 'Hernandez', 'Herrera', 'Herring', 'Hess', 'Hester', 'Hewitt', 'Hickman', 'Hicks', 'Higgins', 'Hill', 'Hines', 'Hinton', 'Hobbs', 'Hodge', 'Hodges', 'Hoffman', 'Hogan', 'Holcomb', 'Holden', 'Holder', 'Holland', 'Holloway', 'Holman', 'Holmes', 'Holt', 'Hood', 'Hooper', 'Hoover', 'Hopkins', 'Hopper', 'Horn', 'Horne', 'Horton', 'House', 'Houston', 'Howard', 'Howe', 'Howell', 'Hubbard', 'Huber', 'Hudson', 'Huff', 'Huffman', 'Hughes', 'Hull', 'Humphrey', 'Hunt', 'Hunter', 'Hurley', 'Hurst', 'Hutchinson', 'Hyde', 'Ingram', 'Irwin', 'Jackson', 'Jacobs', 'Jacobson', 'James', 'Jarvis', 'Jefferson', 'Jenkins', 'Jennings', 'Jensen', 'Jimenez', 'Johns', 'Johnson', 'Johnston', 'Jones', 'Jordan', 'Joseph', 'Joyce', 'Joyner', 'Juarez', 'Justice', 'Kane', 'Kaufman', 'Keith', 'Keller', 'Kelley', 'Kelly', 'Kemp', 'Kennedy', 'Kent', 'Kerr', 'Key', 'Kidd', 'Kim', 'King', 'Kinney', 'Kirby', 'Kirk', 'Kirkland', 'Klein', 'Kline', 'Knapp', 'Knight', 'Knowles', 'Knox', 'Koch', 'Kramer', 'Lamb', 'Lambert', 'Lancaster', 'Landry', 'Lane', 'Lang', 'Langley', 'Lara', 'Larsen', 'Larson', 'Lawrence', 'Lawson', 'Le', 'Leach', 'Leblanc', 'Lee', 'Leon', 'Leonard', 'Lester', 'Levine', 'Levy', 'Lewis', 'Lindsay', 'Lindsey', 'Little', 'Livingston', 'Lloyd', 'Logan', 'Long', 'Lopez', 'Lott', 'Love', 'Lowe', 'Lowery', 'Lucas', 'Luna', 'Lynch', 'Lynn', 'Lyons', 'Macdonald', 'Macias', 'Mack', 'Madden', 'Maddox', 'Maldonado', 'Malone', 'Mann', 'Manning', 'Marks', 'Marquez', 'Marsh', 'Marshall', 'Martin', 'Martinez', 'Mason', 'Massey', 'Mathews', 'Mathis', 'Matthews', 'Maxwell', 'May', 'Mayer', 'Maynard', 'Mayo', 'Mays', 'Mcbride', 'Mccall', 'Mccarthy', 'Mccarty', 'Mcclain', 'Mcclure', 'Mcconnell', 'Mccormick', 'Mccoy', 'Mccray', 'Mccullough', 'Mcdaniel', 'Mcdonald', 'Mcdowell', 'Mcfadden', 'Mcfarland', 'Mcgee', 'Mcgowan', 'Mcguire', 'Mcintosh', 'Mcintyre', 'Mckay', 'Mckee', 'Mckenzie', 'Mckinney', 'Mcknight', 'Mclaughlin', 'Mclean', 'Mcleod', 'Mcmahon', 'Mcmillan', 'Mcneil', 'Mcpherson', 'Meadows', 'Medina', 'Mejia', 'Melendez', 'Melton', 'Mendez', 'Mendoza', 'Mercado', 'Mercer', 'Merrill', 'Merritt', 'Meyer', 'Meyers', 'Michael', 'Middleton', 'Miles', 'Miller', 'Mills', 'Miranda', 'Mitchell', 'Molina', 'Monroe', 'Montgomery', 'Montoya', 'Moody', 'Moon', 'Mooney', 'Moore', 'Morales', 'Moran', 'Moreno', 'Morgan', 'Morin', 'Morris', 'Morrison', 'Morrow', 'Morse', 'Morton', 'Moses', 'Mosley', 'Moss', 'Mueller', 'Mullen', 'Mullins', 'Munoz', 'Murphy', 'Murray', 'Myers', 'Nash', 'Navarro', 'Neal', 'Nelson', 'Newman', 'Newton', 'Nguyen', 'Nichols', 'Nicholson', 'Nielsen', 'Nieves', 'Nixon', 'Noble', 'Noel', 'Nolan', 'Norman', 'Norris', 'Norton', 'Nunez', 'Obrien', 'Ochoa', 'Oconnor', 'Odom', 'Odonnell', 'Oliver', 'Olsen', 'Olson', 'Oneal', 'Oneil', 'Oneill', 'Orr', 'Ortega', 'Ortiz', 'Osborn', 'Osborne', 'Owen', 'Owens', 'Pace', 'Pacheco', 'Padilla', 'Page', 'Palmer', 'Park', 'Parker', 'Parks', 'Parrish', 'Parsons', 'Pate', 'Patel', 'Patrick', 'Patterson', 'Patton', 'Paul', 'Payne', 'Pearson', 'Peck', 'Pena', 'Pennington', 'Perez', 'Perkins', 'Perry', 'Peters', 'Petersen', 'Peterson', 'Petty', 'Phelps', 'Phillips', 'Pickett', 'Pierce', 'Pittman', 'Pitts', 'Pollard', 'Poole', 'Pope', 'Porter', 'Potter', 'Potts', 'Powell', 'Powers', 'Pratt', 'Preston', 'Price', 'Prince', 'Pruitt', 'Puckett', 'Pugh', 'Quinn', 'Ramirez', 'Ramos', 'Ramsey', 'Randall', 'Randolph', 'Rasmussen', 'Ratliff', 'Ray', 'Raymond', 'Reed', 'Reese', 'Reeves', 'Reid', 'Reilly', 'Reyes', 'Reynolds', 'Rhodes', 'Rice', 'Rich', 'Richard', 'Richards', 'Richardson', 'Richmond', 'Riddle', 'Riggs'];
  const emails = [];
  const idnp = [];
  const phoneNumbers = [];
  const datesOfBirth = [];
  const datesOfEmployment = [];
  const ratings = [];
  const positiveIncomesPerYear = [];
  const taxes = [];
  const levels = ["Junior", "Middle", "Senior"];
  const os = ["Linux", "MacOS", "Windows"];
  const developmentDirections = ["Front-end", "Back-end", "Game-dev", "Embedded", "Android", "iOS"];
  const addToDataBase = [];
  const companyRegex = ["Company", "And-Group", "Production", "Entertainment"];
  const companyName = [];
  const companyEmail = [];
  const companyIncomesPerYear = [];
  const companyTaxes = [];
  const projects = ["Project Breeze", "Command Program", "Project Point", "Project Mecha", "Program Pad", "Project Synergy", "Dynamic Program", "Project Zen", "Project Illuminate", "Magnetic Program", "Project Systems", "Native Program", "Project Force", "Quest Program", "Project Signal", "Project More", "Module Program", "Project Chroma", "Momentum Program", "Strategic Program", "Allosaurus", "MicroRaptor", "Tarius", "Rugops", "Erketu", "Capricorn", "Sagittarius", "Gemini", "Pisces", "Taurus", "Osiris", "Horus", "Hathor", "Anubis", "Bast", "Othello", "Titus", "Ophelia", "Juliet", "Yorick"]
  const domains = ["com", "org", "de", "info"]
  const projectManagers = [];
  const projectWebsites = [];
  const startDevelopments = [];
  const productRating = [];
  const projectInvestments = [];

  const createSomeDates = () => {
    for (let i = 0; i < names.length; i++) {
      emails.push(`${names[i].toLowerCase()}.company@email.com`);
      idnp.push(`${Math.floor(Math.random() * (2022 - 2012) + 2012)}${Math.floor(Math.pow(10, 8 - 1) + Math.random() * 9 * Math.pow(10, 7))}`);
      phoneNumbers.push(`+373-${Math.floor(Math.random() * (7 - 6 + 1) + 6)}${Math.floor(Math.random() * (9 - 8 + 1) + 8)}${Math.floor(Math.random() * 9)}-${Math.floor(Math.pow(10, 1) + Math.random() * 9 * Math.pow(10, 0))}-${Math.floor(Math.pow(10, 2) + Math.random() * 9 * Math.pow(10, 1))}`);
      datesOfBirth.push(`${Math.floor(Math.random() * (13 - 1) + 1)}/${Math.floor(Math.random() * (32 - 1) + 1)}/${Math.floor(Math.random() * (2004 - 1957) + 1957)}`);
      datesOfEmployment.push(`${Math.floor(Math.random() * (13 - 1) + 1)}/${Math.floor(Math.random() * (32 - 1) + 1)}/${Math.floor(Math.random() * (2022 - 2009) + 2009)}`);
      ratings.push(`${(Math.random() * (100 - 76) + 76).toFixed(2)}%`);
      positiveIncomesPerYear.push(`${(Math.floor(Math.random() * (90 - 23) + 23)) * 1000}`);
      taxes.push(`${(Number(positiveIncomesPerYear[i]) * 0.18).toFixed(2)}`);
      addToDataBase.push(`${Math.floor(Math.random() * (13 - 10) + 10)}/${Math.floor(Math.random() * (32 - 1) + 1)}/2022`);
      companyName.push(`${names[Math.floor(Math.random() * 1000)]} ${companyRegex[Math.floor(Math.random() * 4)]}`);
      companyEmail.push(`${companyName[i].replace(/\s+/g, '_').toLowerCase()}.@gmail.com`);
      companyIncomesPerYear.push(`${(Math.floor(Math.random() * (63 - 3) + 3)) * 100000}`);
      companyTaxes.push(`${(Number(positiveIncomesPerYear[i]) * 0.43).toFixed(2)}`);
    }

    for (let i = 0; i < projects.length; i++) {
      projectManagers.push(`${names[Math.floor(Math.random() * 1000)]} ${lastNames[Math.floor(Math.random() * 1000)]}`);
      projectWebsites.push(`${projects[i].toLowerCase().replace(/\s+/g, '_')}.${domains[Math.floor(Math.random() * 4)]}`);
      startDevelopments.push(`${Math.floor(Math.random() * (13 - 1) + 1)}/${Math.floor(Math.random() * (32 - 1) + 1)}/${Math.floor(Math.random() * (2022 - 2009) + 2009)}`);
      productRating.push(`${(Math.random() * (5 - 3) + 3).toFixed(1)}0 stars`);
      projectInvestments.push(`${(Math.floor(Math.random() * (63 - 1) + 1)) * 10000}`);
    }
  }
  createSomeDates();

  const user = () => {
    const arr = [];
    for (let i = 0; i < names.length; i++) {
      let obj = {
        "id": i + 1,
        "firstName": `${names[i]}`,
        "lastName": `${lastNames[i]}`,
        "email": `${emails[i]}`,
        "IDNP": `${idnp[i]}`,
        "phoneNumber": `${phoneNumbers[i]}`,
        "dateOfBirth": `${datesOfBirth[i]}`,
        "dateOfEmployment": `${datesOfEmployment[i]}`,
        "rating": `${ratings[i]}`,
        "positiveIncomesPerYear": `${positiveIncomesPerYear[i]}$`,
        "taxes": `${taxes[i]}$`,
        "level": `${levels[Math.floor(Math.random() * 3)]}`,
        "osPreference": `${os[Math.floor(Math.random() * 3)]}`,
        "developmentDirections": `${developmentDirections[Math.floor(Math.random() * 6)]}`,
        "addToDataBase": `${addToDataBase[i]}`
      };
      arr.push(obj);
    }
    return arr;
  }

  const product = () => {
    const arr = [];
    for (let i = 0; i < projects.length; i++) {
      let obj = {
        "project": `${projects[i]}`,
        "projectManager": `${projectManagers[i]}`,
        "projectWebsite": `${projectWebsites[i]}`,
        "startDevelopment": `${startDevelopments[i]}`,
        "rating": `${productRating[i]}`,
        "projectInvestment": `${projectInvestments[i]}`,
        "addToDataBase": `${addToDataBase[i]}`
      };
      arr.push(obj);
    }
    return arr;
  }

  const company = () => {
    const arr = [];
    for (let i = 0; i < names.length; i++) {
      let obj = {
        "companyName": `${companyName[i]}`,
        "phoneNumber": `${phoneNumbers[i]}`,
        "email": `${companyEmail[i]}`,
        "director": `${names[i]} ${lastNames[i]}`,
        "rating": `${ratings[i]}`,
        "createDate": `${datesOfBirth[i]}`,
        "positiveIncomesPerYear": `${companyIncomesPerYear[i]}$`,
        "taxes": `${companyTaxes[i]}$`,
        "addToDataBase": `${addToDataBase[i]}`
      };
      arr.push(obj);
    }
    return arr;
  }

  const data = {
    users: user(),
    products: product(),
    companies: company()
  }
  return data;
}