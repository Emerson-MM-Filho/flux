import { Feather } from '@expo/vector-icons';

interface IconInterface {
    name: keyof typeof Feather.glyphMap
    color?: string
}

export default IconInterface;