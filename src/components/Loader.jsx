import { motion } from 'framer-motion';
import { Box, CircularProgress } from '@mui/material';

const LoadingScreen = () => {
    return (
      <div className={`min-h-screen w-full flex items-center justify-center ${true ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-purple-100 to-blue-50'}`}>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: 0.1,
                scale: 0.5
              }}
              animate={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: [0.05, 0.15, 0.05],
                scale: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 15 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className={`absolute rounded-full bg-purple-500/10`}
              style={{
                width: `${10 + Math.random() * 30}px`,
                height: `${10 + Math.random() * 30}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
  
        {/* Loading content */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress 
              size={80}
              thickness={4}
              sx={{
                color: 'rgba(124, 58, 237, 0.3)',
                position: 'absolute',
              }}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <CircularProgress 
                size={80}
                thickness={4}
                variant="determinate"
                value={75}
                sx={{
                  color: 'rgba(167, 139, 250, 1)',
                }}
              />
            </motion.div>
          </Box>
          
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300"
          >
            Loading Portfolio
          </motion.h2>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-2 text-purple-200"
          >
            Preparing something amazing for you...
          </motion.p>
        </motion.div>
      </div>
    );
  };

  export default LoadingScreen;