# merge-sort-proje-patika.dev
www.patika.dev
patika.dev profil linki : https://app.patika.dev/ataguneser

  [16,21,11,8,12,22] -> Merge Sort
    
    Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
    
          [16,21,11,8,12,22] 
          /                  \
     [16,21,11]            [8,12,22] 
       /      \               /      \
     [16]   [21,11]         [8]    [12,22]
     /       /    \          /       /   \
    [16]    [21]  [11]      [8]    [12]   [22]
      /       \     /         /      \       /
     [16]     [11,21]       [8]       [12,22]
       \         /            \          /
        [11,16,21]             [8,12,22]
                 \              /
                [8,11,12,16,21,22] 
    
    Big-O gösterimini yazınız.
      O(n*logn) -> O(6*log6)
