# Environmental Risk and Resource Management AI System

A comprehensive React.js frontend application built with Tailwind CSS for environmental risk assessment and resource management using AI technology.

## Features

### 🎯 Core Functionality
- **Dashboard**: Real-time overview of environmental risks and system status
- **Risk Assessment**: Comprehensive environmental risk analysis and management
- **Resource Management**: Monitor and optimize environmental resource utilization
- **Environmental Monitoring**: Real-time data from monitoring stations
- **Reports**: Generate and manage environmental analysis reports
- **Settings**: Configure system preferences and user settings

### 🎨 Design Features
- **Modern UI/UX**: Clean, intuitive interface with Tailwind CSS
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Interactive Components**: Dynamic charts, maps, and data visualizations
- **Real-time Updates**: Live data monitoring with status indicators
- **Accessibility**: Built with accessibility best practices

### 🔧 Technical Features
- **React 18**: Latest React features and performance optimizations
- **React Router**: Client-side routing for seamless navigation
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Recharts**: Beautiful, responsive charts for data visualization
- **Lucide React**: Modern, customizable icons
- **Responsive Grid**: Adaptive layouts for all screen sizes

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd environmental-risk-management-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── Charts/
│   │   └── Chart.js              # Recharts integration
│   ├── Dashboard/
│   │   ├── RecentActivity.js     # Activity feed component
│   │   └── EnvironmentalMap.js   # Interactive map component
│   ├── Layout/
│   │   ├── Layout.js             # Main layout wrapper
│   │   ├── Sidebar.js            # Navigation sidebar
│   │   └── Header.js             # Top header component
│   └── UI/
│       └── StatCard.js           # Statistics display card
├── pages/
│   ├── Dashboard.js              # Main dashboard page
│   ├── RiskAssessment.js         # Risk analysis page
│   ├── ResourceManagement.js     # Resource monitoring page
│   ├── EnvironmentalMonitoring.js # Real-time monitoring
│   ├── Reports.js                # Reports management
│   └── Settings.js               # System settings
├── App.js                        # Main application component
├── index.js                      # Application entry point
└── index.css                     # Global styles with Tailwind
```

## Key Components

### Dashboard
- Real-time statistics and KPIs
- Interactive environmental map
- Recent activity feed
- Critical alerts and notifications

### Risk Assessment
- Environmental risk analysis
- Risk level categorization
- Assessment status tracking
- Location-based risk mapping

### Resource Management
- Resource utilization monitoring
- Capacity planning and optimization
- Trend analysis and forecasting
- Resource allocation management

### Environmental Monitoring
- Real-time sensor data display
- Multi-station monitoring dashboard
- Environmental metrics tracking
- Alert and threshold management

### Reports
- Automated report generation
- Report status tracking
- Download and sharing capabilities
- Historical data analysis

### Settings
- User profile management
- Notification preferences
- Security configurations
- System parameters

## Styling and Theming

The application uses a custom Tailwind CSS configuration with:

- **Primary Colors**: Green-based palette for environmental theme
- **Secondary Colors**: Professional gray scale
- **Status Colors**: Red (danger), Yellow (warning), Green (success)
- **Typography**: Inter font family for modern readability
- **Animations**: Smooth transitions and hover effects
- **Responsive Design**: Mobile-first approach

## Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route to `src/App.js`
3. Update the navigation in `src/components/Layout/Sidebar.js`

### Styling Components
- Use Tailwind utility classes for rapid styling
- Extend the theme in `tailwind.config.js` for custom colors/spacing
- Add custom components in `src/index.css` using `@layer components`

### Adding Charts
- Use Recharts library for data visualization
- Follow the pattern in `src/components/Charts/Chart.js`
- Customize colors and styling to match the theme

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is part of a research initiative for Environmental Risk and Resource Management AI System.

## Support

For questions or support, please contact the research team or create an issue in the repository.

---

**Built with ❤️ for Environmental Research**

