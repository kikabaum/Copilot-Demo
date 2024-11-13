```mermaid
classDiagram
    class Dashboard {
        +useFlags()
        +ChakraProvider
        +MainPanel
        +Flex
        +PanelContent
        +PanelContainer
        +AdminNavbar
        +SimpleGrid
        +MiniStatistics
        +Grid
        +ActiveUsers
        +BarChart
    }

    class MiniStatistics {
        +title
        +amount
        +percentage
        +icon
    }

    class ActiveUsers {
        +title
        +percentage
        +chart
    }

    class BarChart {
        +chartData
        +chartOptions
        +componentDidMount()
        +render()
    }

    Dashboard --> MiniStatistics
    Dashboard --> ActiveUsers
    ActiveUsers --> BarChart