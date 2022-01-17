const dfsJavaCode = `
    // DFS
    public class Main {

        static boolean[] visited = new boolean[N];
        static int[][] graph = new int[V][V];

        public void dfs(int index){

            visited[index] = true;

            for(int i = 1; i <= V ; i++){
                if(graph[index][i] == 1 && visited[i] = false){
                    dfs(i);
                }
            }
        }

        public static void main(String[] args){

            int index = 0; 

            dfs(index);

        }

    }

`;

export default dfsJavaCode;