export class RepoConfig {
    isMonolith: boolean;
    organization: string;
    repository: string;
    index: number;
    constructor(){
        this.organization = "";
        this.repository = "";
        this.isMonolith = false;
    }
}