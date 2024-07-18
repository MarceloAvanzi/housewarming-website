export default interface Product {
    id: number;
    name: string;
    imagePath: string;
    description: string;
    direction: 'left' | 'right';
}