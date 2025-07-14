import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { 
  Coins, 
  Gamepad2, 
  TrendingUp, 
  Wallet, 
  Dice1, 
  Spade, 
  CircleDollarSign,
  Zap,
  Trophy,
  Users,
  BarChart3,
  Settings
} from 'lucide-react'
import './App.css'

function App() {
  const [balance, setBalance] = useState(2847.52)
  const [miningEarnings, setMiningEarnings] = useState(156.78)
  const [totalEarnings, setTotalEarnings] = useState(3004.30)
  const [isConnected, setIsConnected] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [gamesPlayed, setGamesPlayed] = useState(47)
  const [winRate, setWinRate] = useState(68)

  // Simulate real-time mining earnings
  useEffect(() => {
    const interval = setInterval(() => {
      setMiningEarnings(prev => prev + Math.random() * 0.1)
      setBalance(prev => prev + Math.random() * 0.05)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const connectWallet = () => {
    setIsConnected(true)
  }

  const playSlots = () => {
    const bet = 10
    const win = Math.random() > 0.7
    if (win) {
      const winAmount = bet * (2 + Math.random() * 8)
      setBalance(prev => prev + winAmount - bet)
      setTotalEarnings(prev => prev + winAmount)
    } else {
      setBalance(prev => prev - bet)
    }
    setGamesPlayed(prev => prev + 1)
  }

  const playDice = () => {
    const bet = 5
    const win = Math.random() > 0.5
    if (win) {
      const winAmount = bet * 1.95
      setBalance(prev => prev + winAmount - bet)
      setTotalEarnings(prev => prev + winAmount)
    } else {
      setBalance(prev => prev - bet)
    }
    setGamesPlayed(prev => prev + 1)
  }

  const playCoinFlip = () => {
    const bet = 25
    const win = Math.random() > 0.5
    if (win) {
      const winAmount = bet * 1.95
      setBalance(prev => prev + winAmount - bet)
      setTotalEarnings(prev => prev + winAmount)
    } else {
      setBalance(prev => prev - bet)
    }
    setGamesPlayed(prev => prev + 1)
  }

  const playPoker = () => {
    const bet = 50
    const random = Math.random()
    let win = false
    let multiplier = 0
    
    if (random > 0.95) {
      win = true
      multiplier = 100 // Royal flush
    } else if (random > 0.85) {
      win = true
      multiplier = 25 // Four of a kind
    } else if (random > 0.6) {
      win = true
      multiplier = 9 // Full house
    } else if (random > 0.4) {
      win = true
      multiplier = 3 // Three of a kind
    } else if (random > 0.2) {
      win = true
      multiplier = 2 // Two pair
    }
    
    if (win) {
      const winAmount = bet * multiplier
      setBalance(prev => prev + winAmount - bet)
      setTotalEarnings(prev => prev + winAmount)
    } else {
      setBalance(prev => prev - bet)
    }
    setGamesPlayed(prev => prev + 1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <Coins className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">FreeCash</h1>
                <p className="text-sm text-gray-300">Blockchain Gaming Platform</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-300">Balance</p>
                <p className="text-xl font-bold text-white">${balance.toFixed(2)}</p>
              </div>
              
              {!isConnected ? (
                <Button onClick={connectWallet} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  <Wallet className="w-4 h-4 mr-2" />
                  Connect Wallet
                </Button>
              ) : (
                <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Connected
                </Badge>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-black/20 border border-white/10">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-white/10">
              <BarChart3 className="w-4 h-4 mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="games" className="data-[state=active]:bg-white/10">
              <Gamepad2 className="w-4 h-4 mr-2" />
              Games
            </TabsTrigger>
            <TabsTrigger value="mining" className="data-[state=active]:bg-white/10">
              <TrendingUp className="w-4 h-4 mr-2" />
              Mining
            </TabsTrigger>
            <TabsTrigger value="wallet" className="data-[state=active]:bg-white/10">
              <Wallet className="w-4 h-4 mr-2" />
              Wallet
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-black/20 border-white/10 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">Total Balance</CardTitle>
                  <CircleDollarSign className="h-4 w-4 text-yellow-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">${balance.toFixed(2)}</div>
                  <p className="text-xs text-green-400">+2.5% from last hour</p>
                </CardContent>
              </Card>

              <Card className="bg-black/20 border-white/10 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">Mining Earnings</CardTitle>
                  <Zap className="h-4 w-4 text-blue-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">${miningEarnings.toFixed(2)}</div>
                  <p className="text-xs text-green-400">+$0.12 per minute</p>
                </CardContent>
              </Card>

              <Card className="bg-black/20 border-white/10 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">Total Earnings</CardTitle>
                  <Trophy className="h-4 w-4 text-purple-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">${totalEarnings.toFixed(2)}</div>
                  <p className="text-xs text-green-400">All-time earnings</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-black/20 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Gaming Statistics</CardTitle>
                  <CardDescription className="text-gray-400">Your gaming performance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Games Played</span>
                    <span className="text-white font-bold">{gamesPlayed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Win Rate</span>
                    <span className="text-white font-bold">{winRate}%</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Progress to next level</span>
                      <span className="text-gray-300">75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/20 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Mining Pools</CardTitle>
                  <CardDescription className="text-gray-400">Active mining operations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Bitcoin Mining</span>
                      <Badge variant="secondary" className="bg-orange-500/20 text-orange-400">5% APY</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Ethereum Staking</span>
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">6% APY</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">DeFi Yield</span>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400">8% APY</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Games Tab */}
          <TabsContent value="games" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-black/20 border-white/10 backdrop-blur-sm hover:bg-black/30 transition-colors cursor-pointer" onClick={playSlots}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gamepad2 className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white">Slot Machine</CardTitle>
                  <CardDescription className="text-gray-400">Spin to win big prizes</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600">
                    Play - $10 Bet
                  </Button>
                  <p className="text-xs text-gray-400 mt-2">Max win: 50x</p>
                </CardContent>
              </Card>

              <Card className="bg-black/20 border-white/10 backdrop-blur-sm hover:bg-black/30 transition-colors cursor-pointer" onClick={playDice}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Dice1 className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white">Dice Game</CardTitle>
                  <CardDescription className="text-gray-400">Bet high or low</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                    Play - $5 Bet
                  </Button>
                  <p className="text-xs text-gray-400 mt-2">Payout: 1.95x</p>
                </CardContent>
              </Card>

              <Card className="bg-black/20 border-white/10 backdrop-blur-sm hover:bg-black/30 transition-colors cursor-pointer" onClick={playCoinFlip}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Coins className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white">Coin Flip</CardTitle>
                  <CardDescription className="text-gray-400">Heads or tails</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                    Play - $25 Bet
                  </Button>
                  <p className="text-xs text-gray-400 mt-2">Payout: 1.95x</p>
                </CardContent>
              </Card>

              <Card className="bg-black/20 border-white/10 backdrop-blur-sm hover:bg-black/30 transition-colors cursor-pointer" onClick={playPoker}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Spade className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white">Video Poker</CardTitle>
                  <CardDescription className="text-gray-400">5-card draw poker</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600">
                    Play - $50 Bet
                  </Button>
                  <p className="text-xs text-gray-400 mt-2">Max win: 100x</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-black/20 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Recent Games</CardTitle>
                <CardDescription className="text-gray-400">Your latest gaming activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Gamepad2 className="w-5 h-5 text-red-400" />
                      <span className="text-white">Slot Machine</span>
                    </div>
                    <div className="text-right">
                      <p className="text-green-400 font-bold">+$150.00</p>
                      <p className="text-xs text-gray-400">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Dice1 className="w-5 h-5 text-blue-400" />
                      <span className="text-white">Dice Game</span>
                    </div>
                    <div className="text-right">
                      <p className="text-red-400 font-bold">-$5.00</p>
                      <p className="text-xs text-gray-400">5 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Coins className="w-5 h-5 text-yellow-400" />
                      <span className="text-white">Coin Flip</span>
                    </div>
                    <div className="text-right">
                      <p className="text-green-400 font-bold">+$48.75</p>
                      <p className="text-xs text-gray-400">8 minutes ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Mining Tab */}
          <TabsContent value="mining" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-black/20 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                      <Coins className="w-4 h-4 text-white" />
                    </div>
                    Bitcoin Mining
                  </CardTitle>
                  <CardDescription className="text-gray-400">5% Annual Return</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Invested</span>
                    <span className="text-white font-bold">$1,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Earned</span>
                    <span className="text-green-400 font-bold">$42.15</span>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    Increase Investment
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-black/20 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    Ethereum Staking
                  </CardTitle>
                  <CardDescription className="text-gray-400">6% Annual Return</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Staked</span>
                    <span className="text-white font-bold">$2,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Earned</span>
                    <span className="text-green-400 font-bold">$89.32</span>
                  </div>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">
                    Stake More ETH
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-black/20 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    DeFi Yield
                  </CardTitle>
                  <CardDescription className="text-gray-400">8% Annual Return</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Deposited</span>
                    <span className="text-white font-bold">$500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Earned</span>
                    <span className="text-green-400 font-bold">$25.31</span>
                  </div>
                  <Button className="w-full bg-green-500 hover:bg-green-600">
                    Add Liquidity
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-black/20 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Mining Performance</CardTitle>
                <CardDescription className="text-gray-400">Real-time earnings and statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <p className="text-2xl font-bold text-white">${miningEarnings.toFixed(2)}</p>
                    <p className="text-sm text-gray-400">Total Mined</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <p className="text-2xl font-bold text-white">$0.12</p>
                    <p className="text-sm text-gray-400">Per Minute</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <p className="text-2xl font-bold text-white">24/7</p>
                    <p className="text-sm text-gray-400">Uptime</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <p className="text-2xl font-bold text-white">6.2%</p>
                    <p className="text-sm text-gray-400">Avg APY</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Wallet Tab */}
          <TabsContent value="wallet" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-black/20 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Wallet Balance</CardTitle>
                  <CardDescription className="text-gray-400">Your PRIZE token holdings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg border border-yellow-500/30">
                    <p className="text-3xl font-bold text-white">{balance.toFixed(2)}</p>
                    <p className="text-yellow-400">PRIZE Tokens</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Button className="bg-green-500 hover:bg-green-600">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Buy PRIZE
                    </Button>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      <CircleDollarSign className="w-4 h-4 mr-2" />
                      Sell PRIZE
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/20 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Transaction History</CardTitle>
                  <CardDescription className="text-gray-400">Recent wallet activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <div>
                        <p className="text-white font-medium">Gaming Win</p>
                        <p className="text-xs text-gray-400">Slot Machine</p>
                      </div>
                      <p className="text-green-400 font-bold">+150.00 PRIZE</p>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <div>
                        <p className="text-white font-medium">Mining Reward</p>
                        <p className="text-xs text-gray-400">Bitcoin Pool</p>
                      </div>
                      <p className="text-green-400 font-bold">+12.50 PRIZE</p>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <div>
                        <p className="text-white font-medium">Staking Reward</p>
                        <p className="text-xs text-gray-400">Ethereum Pool</p>
                      </div>
                      <p className="text-green-400 font-bold">+25.75 PRIZE</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-black/20 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Portfolio Overview</CardTitle>
                <CardDescription className="text-gray-400">Your investment breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Gamepad2 className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-white font-bold text-xl">45%</p>
                    <p className="text-gray-400">Gaming</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-white font-bold text-xl">35%</p>
                    <p className="text-gray-400">Mining</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Coins className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-white font-bold text-xl">20%</p>
                    <p className="text-gray-400">Holdings</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Coins className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-bold">FreeCash</span>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400">Live</Badge>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Polygon Network</span>
              <span>•</span>
              <span>Provably Fair</span>
              <span>•</span>
              <span>24/7 Mining</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

