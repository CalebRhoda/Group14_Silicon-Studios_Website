import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Define the Tab Navigator using the Bottom Tab Navigator
const Tab = createBottomTabNavigator();

// Home Screen Component
function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header section with logo and title */}
      <View style={styles.header}>
        <Image source={require('./images/logo.jpeg')} style={styles.icon} />
        <Text style={styles.title}>Empowering the nation</Text>
      </View>
      {/* Main content area with background image and overlay description */}
      <View style={styles.content}>
        <Image source={require('./images/background.jpg')} style={styles.backgroundImage} />
        <View style={styles.overlay}>
          <Text style={styles.description}>
            Empowering the Nation was established in 2018 and offers courses in Johannesburg. Hundreds of domestic workers and gardeners have been trained on both the six-month long Learnerships and six-week Short Skills Training Programmes to empower themselves and can provide more marketable skills.
          </Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

// Six-Month Courses Screen Component
function CoursesScreen() {
  const [selectedTab, setSelectedTab] = useState('First Aid');
  const tabContent = {
    'First Aid': {
      fees: 'R1500',
      purpose: 'To provide first aid awareness and basic life support',
      content: [
        'Wounds and bleeding',
        'Burns and fractures',
        'Emergency scene management',
        'Cardio-Pulmonary Resuscitation (CPR)',
        'Respiratory distress e.g., Choking, blocked airway',
      ],
      image: require('./images/first_aid.jpg'),
    },
    'Sewing': {
      fees: 'R1500',
      purpose: 'To provide alterations and new garment tailoring services',
      content: ['Types of stitches', 'Threading a sewing machine', 'Sewing buttons, zips, hems and seams', 'Alterations', 'Designing and sewing new garments'],
      image: require('./images/sewing.jpg'),
    },
    'Landscaping': {
      fees: 'R1500',
      purpose: 'To provide landscaping services for new and established gardens',
      content: ['Indigenous and exotic plants and trees', 'Fixed structures (fountains, statues, benches, tables, built-in braai)', 'Balancing of plants and trees in a garden', 'Aesthetics of plant shapes and colours', 'Garden layout'],
      image: require('./images/landscaping.jpg'),
    },
    'Life Skills': {
      fees: 'R1500',
      purpose: 'To provide skills to navigate basic life necessities',
      content: ['Opening a bank account', 'Basic labour law (know your rights)', 'Basic reading and writing literacy', 'Basic numeric literacy'],
      image: require('./images/life_skills.jpg'),
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./images/logo.jpeg')} style={styles.icon} />
        <Text style={styles.title}>Empowering the nation</Text>
      </View>
      <View style={styles.tabs}>
        {Object.keys(tabContent).map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, selectedTab === tab && styles.activeTab]}
            onPress={() => setSelectedTab(tab)} // Update selected tab on press
            activeOpacity={0.7}
          >
            <Text style={styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.contentArea}>
        <Text>Fees: {tabContent[selectedTab].fees}</Text>
        <Text>Purpose: {tabContent[selectedTab].purpose}</Text>
        <Text style={styles.contentHeader}>Content:</Text>
        {tabContent[selectedTab].content.map((item, index) => (
          <Text key={index} style={styles.contentItem}>
            {item}
          </Text>
        ))}
        <Image source={tabContent[selectedTab].image} style={styles.courseImage} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

// Six-Week Courses Screen Component
function SixWeekCoursesScreen() {
  const [selectedTab, setSelectedTab] = useState('Child Minding');
  const tabContent = {
    'Child Minding': {
      fees: 'R750',
      purpose: 'To provide basic child and baby care',
      content: [
        'Birth to six-month-old baby needs',
        'Seven-month to one-year-old needs',
        'Toddler needs',
        'Educational toys',
      ],
      image: require('./images/child_minding.jpeg'),
    },
    'Cooking': {
      fees: 'R750',
      purpose: 'To prepare and cook nutritious family meals',
      content: [
        'Nutritional requirements for a healthy body',
        'Types of protein, carbohydrates, and vegetables',
        'Planning meals',
        'Preparation and cooking of meals',
      ],
      image: require('./images/cooking.jpeg'),
    },
    'Garden Maintenance': {
      fees: 'R750',
      purpose: 'To provide basic knowledge of watering, pruning, and planting in a domestic garden',
      content: [
        'Water restrictions and watering requirements of indigenous and exotic plants',
        'Pruning and propagation of plants',
        'Planting techniques for different plant types',
      ],
      image: require('./images/garden_maintenance.jpeg'),
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./images/logo.jpeg')} style={styles.icon} />
        <Text style={styles.title}>Empowering the nation</Text>
      </View>
      <View style={styles.tabs}>
        {Object.keys(tabContent).map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, selectedTab === tab && styles.activeTab]}
            onPress={() => setSelectedTab(tab)} // Update selected tab on press
            activeOpacity={0.7}
          >
            <Text style={styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.contentArea}>
        <Text>Fees: {tabContent[selectedTab].fees}</Text>
        <Text>Purpose: {tabContent[selectedTab].purpose}</Text>
        <Text style={styles.contentHeader}>Content:</Text>
        {tabContent[selectedTab].content.map((item, index) => (
          <Text key={index} style={styles.contentItem}>
            {item}
          </Text>
        ))}
        <Image source={tabContent[selectedTab].image} style={styles.courseImage} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

// Calculate Total Fees Screen Component
function CalculateTotalFees() {
  const [selectedCourses, setSelectedCourses] = useState({
    firstAid: false,
    sewing: false,
    landscaping: false,
    lifeSkills: false,
    childMinding: false,
    cooking: false,
    gardenMaintenance: false,
  });

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const toggleCheckbox = (course) => {
    setSelectedCourses((prevState) => ({
      ...prevState,
      [course]: !prevState[course],
    }));
  };

  const calculateFees = () => {
    const courseFees = {
      firstAid: 1500,
      sewing: 1500,
      landscaping: 1500,
      lifeSkills: 1500,
      childMinding: 750,
      cooking: 750,
      gardenMaintenance: 750,
    };

    let selectedCount = 0;
    let total = 0;

    Object.keys(selectedCourses).forEach((course) => {
      if (selectedCourses[course]) {
        selectedCount++;
        total += courseFees[course];
      }
    });

    // Apply discounts based on the number of selected courses
    if (selectedCount === 2) {
      total *= 0.95; // 5% discount
    } else if (selectedCount === 3) {
      total *= 0.90; // 10% discount
    } else if (selectedCount > 3) {
      total *= 0.85; // 15% discount
    }

    // Add 15% VAT
    total *= 1.15;

    return total.toFixed(2); // Return formatted total with two decimals
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./images/logo.jpeg')} style={styles.icon} />
        <Text style={styles.title}>Calculate Total Fees</Text>
      </View>

      {/* User Details Section */}
      <View>
        <View style={styles.horizontalLayout}>
          <Text style={styles.nameQuestion}>Name: </Text>
          <TextInput
            placeholder='Enter your name'
            style={styles.nameEntry}
            value={userDetails.name}
            onChangeText={(text) => setUserDetails({ ...userDetails, name: text })}
          />
        </View>
        <View style={styles.horizontalLayout}>
          <Text style={styles.nameQuestion}>Email: </Text>
          <TextInput
            placeholder='Enter your email'
            style={styles.nameEntry}
            value={userDetails.email}
            onChangeText={(text) => setUserDetails({ ...userDetails, email: text })}
          />
        </View>
        <View style={styles.horizontalLayout}>
          <Text style={styles.nameQuestion}>Phone number: </Text>
          <TextInput
            placeholder='Enter your phone number'
            style={styles.nameEntry}
            value={userDetails.phone}
            onChangeText={(text) => setUserDetails({ ...userDetails, phone: text })}
          />
        </View>
      </View>

      {/* Six-Month Courses Selection Section */}
      <View style={styles.containsStuff}>
        <View style={styles.blockExample}>
          <Text style={styles.contentHeader}>Six-Month Courses:</Text>
          <View>
            <TouchableOpacity onPress={() => toggleCheckbox('firstAid')}>
              <Text>{selectedCourses.firstAid ? '☑' : '☐'} First Aid - R1500</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => toggleCheckbox('sewing')}>
              <Text>{selectedCourses.sewing ? '☑' : '☐'} Sewing - R1500</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => toggleCheckbox('landscaping')}>
              <Text>{selectedCourses.landscaping ? '☑' : '☐'} Landscaping - R1500</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => toggleCheckbox('lifeSkills')}>
              <Text>{selectedCourses.lifeSkills ? '☑' : '☐'} Life Skills - R1500</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Six-Week Courses Selection Section */}
      <View style={styles.containsStuff}>
        <View style={styles.blockExample}>
          <Text style={styles.contentHeader}>Six-Week Courses:</Text>
          <View>
            <TouchableOpacity onPress={() => toggleCheckbox('childMinding')}>
              <Text>{selectedCourses.childMinding ? '☑' : '☐'} Child Minding - R750</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => toggleCheckbox('cooking')}>
              <Text>{selectedCourses.cooking ? '☑' : '☐'} Cooking - R750</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => toggleCheckbox('gardenMaintenance')}>
              <Text>{selectedCourses.gardenMaintenance ? '☑' : '☐'} Garden Maintenance - R750</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Calculate Button */}
      <View style={styles.calculateButtonContainer}>
        <Button title="Calculate Total Fee" onPress={() => alert(`Total Fee (including VAT): R ${calculateFees()}`)} />
      </View>
    </View>
  );
}

// Contact Details Screen Component
function ContactDetailsScreen() {
  const [contactDetails, setContactDetails] = useState({
    phone: '',
    email: '',
    address: ''
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./images/logo.jpeg')} style={styles.icon} />
        <Text style={styles.title}>Empowering the nation</Text>
      </View>
      <View style={styles.contentArea}>
        <Text style={styles.contentHeader}>Contact Details</Text>
        <View style={styles.formField}>
          <Text>Phone:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            value={contactDetails.phone}
            onChangeText={(text) => setContactDetails({ ...contactDetails, phone: text })}
          />
        </View>
        <View style={styles.formField}>
          <Text>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={contactDetails.email}
            onChangeText={(text) => setContactDetails({ ...contactDetails, email: text })}
          />
        </View>
        <View style={styles.formField}>
          <Text>Address:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your address"
            value={contactDetails.address}
            onChangeText={(text) => setContactDetails({ ...contactDetails, address: text })}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

// Bottom Tab Navigator Component
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Hide the default header
        tabBarStyle: { backgroundColor: '#000' }, // Custom background color for the tab bar
        tabBarLabelStyle: { color: '#fff', fontWeight: 'bold' }, // Style for tab labels
        tabBarIcon: () => null, // Remove default icons
        tabBarLabel: ({ focused }) => {
          // Animation for moving the tab label when focused
          const animatedValue = new Animated.Value(focused ? -10 : 0);

          React.useEffect(() => {
            Animated.timing(animatedValue, {
              toValue: focused ? -10 : 0,
              duration: 300,
              useNativeDriver: true,
            }).start();
          }, [focused]);

          return (
            <Animated.View style={{ transform: [{ translateY: animatedValue }] }}>
              <Text style={styles.tabText}>{route.name}</Text>
            </Animated.View>
          );
        },
      })}
    >
      {/* Define all the tabs */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Six-Month Courses" component={CoursesScreen} />
      <Tab.Screen name="Six-Week Courses" component={SixWeekCoursesScreen} />
      <Tab.Screen name="Contact Details" component={ContactDetailsScreen} />
      <Tab.Screen name="Calculate Fees" component={CalculateTotalFees} />
    </Tab.Navigator>
  );
}

// App Component with Navigation Setup
export default function App() {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
}

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#000',
    marginTop: 20,
  },
  icon: {
    width: 70,
    height: 70,
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  contentArea: {
    flex: 1,
    backgroundColor: '#FFCDD2',
    padding: 20,
  },
  contentHeader: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  contentItem: {
    marginTop: 5,
    fontSize: 14,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#E91E63',
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#C2185B',
  },
  tabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  courseImage: {
    marginTop: 20,
    width: '100%',
    height: 200,
    resizeMode: 'cover', // Adjust the image size based on the aspect ratio
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    padding: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  horizontalLayout: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  nameEntry: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '60%',
    borderRadius: 5,
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',
  },
  nameQuestion: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  containsStuff: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  blockExample: {
    backgroundColor: '#ddd',
    padding: 10,
    marginVertical: 5,
    flex: 1,
    alignItems: 'center',
  },
  feesSection: {
    paddingTop: 20,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E91E63',
  },
  formField: {
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  calculateButtonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
