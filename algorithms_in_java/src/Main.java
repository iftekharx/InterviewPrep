

public class Main {
	
	public static ListNode<Integer> head;

    public static int[] resize(int[] arr, int capacity){
        int[] temp = new int[capacity];
        for(int i = 0; i < arr.length; i++){
            temp[i] = arr[i];
        }
        arr = temp; // garbage collection finally
        return arr;
    }
    
    public static boolean isPallindrome(String word) {
    	char[] charArray = word.toCharArray();
    	int start = 0;
    	int end = word.length() - 1;
    	
    	while(start < end) {
    		if(charArray[start] != charArray[end]) {
    			return false;
    		}
    		start ++;
    		end--;
    	}
    	return true;
    }
    
    public static void TraverseLinkedList(ListNode head) {
    	
    	ListNode current = head;
    	while(current != null) 
    	{
    		System.out.print(current.data + " --> ");
    		current = current.next;
    	}
    	System.out.println("null");
    	
    }
    
    public static void InsertFirst(int value) {
    	
    	ListNode<Integer> newNode = new ListNode<Integer>(value);
    	newNode.next = head;
    	head = newNode;
    	
    	
    }
    
    public static void InsertPos(int value, int position) {
    	 // 1 -> 4 -> 5
        // 1 -> 6 -> 4 -> 5
        ListNode node = new ListNode(value);

        if (position == 1) {
           node.next = head;
           head = node;
        } else {
           ListNode previous = head;
           int count = 1; // position - 1

           while (count < position - 1) {
              previous = previous.next;
              count++;
           }

           ListNode current = previous.next;
           previous.next = node;
           node.next = current;
        }

    }
    
    public static void InsertLast(int value) {
    	ListNode<Integer> newNode = new ListNode<Integer>(value);
    	if(head == null) {
    		head = newNode;
    		return;
    	}
    	
    	ListNode current = head;
    	while(null != current.next) {
    		current = current.next;
    	}
    	
    	current.next = newNode;
    }
   

    public static void main(String[] args) {
//        int[] arr = {1, 2, 3, 4, 5};
//
//        arr = resize(arr, 8);
//        arr[5] = 78;
//
//        System.out.println(arr.length);
//    	
//    	String x = "madam";
//    	System.out.println(isPallindrome(x));
    	
    	
    	
    	head = new ListNode<Integer>(1);
    	ListNode<Integer> second = new ListNode<Integer>(2);
    	ListNode<Integer> third = new ListNode<Integer>(3);
    	
    	second.next = third;
    	head.next = second;
    	
    	TraverseLinkedList(head);
    	
    	InsertFirst(67);
    	InsertLast(100);
    	InsertPos(2, 89);
    	
    	TraverseLinkedList(head);
    	
    	

    	
    	
    	
        
    }
    
}
