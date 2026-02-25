export default class Blog {
    title: string;
    content: string;
    color: string;

    constructor(title: string, content: string, color: string){
        this.title = title
        this.content = content
        this.color = color

        if (this.title.length <= 0){
            throw new Error("The title can't be empty")
        }

        if (this.content.length <= 0){
            throw new Error("The content can't be empty")
        }

        if(this.color.length != 7 || this.color.charAt(0) != '#'){
            throw new Error("Invalid color attribute")
        }
    }
}