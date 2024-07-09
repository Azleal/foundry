(function() {var type_impls = {
"forge":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Database-for-State%3CDB%3E\" class=\"impl\"><a href=\"#impl-Database-for-State%3CDB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;DB&gt; <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html\" title=\"trait forge::revm::interpreter::primitives::db::Database\">Database</a> for <a class=\"struct\" href=\"forge/revm/struct.State.html\" title=\"struct forge::revm::State\">State</a>&lt;DB&gt;<div class=\"where\">where\n    DB: <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html\" title=\"trait forge::revm::interpreter::primitives::db::Database\">Database</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"forge/revm/interpreter/primitives/db/trait.Database.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = &lt;DB as <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html\" title=\"trait forge::revm::interpreter::primitives::db::Database\">Database</a>&gt;::<a class=\"associatedtype\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html#associatedtype.Error\" title=\"type forge::revm::interpreter::primitives::db::Database::Error\">Error</a></h4></section></summary><div class='docblock'>The database error type.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.basic\" class=\"method trait-impl\"><a href=\"#method.basic\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forge/revm/interpreter/primitives/db/trait.Database.html#tymethod.basic\" class=\"fn\">basic</a>(\n    &amp;mut self,\n    address: <a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"forge/revm/interpreter/primitives/struct.AccountInfo.html\" title=\"struct forge::revm::interpreter::primitives::AccountInfo\">AccountInfo</a>&gt;, &lt;<a class=\"struct\" href=\"forge/revm/struct.State.html\" title=\"struct forge::revm::State\">State</a>&lt;DB&gt; as <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html\" title=\"trait forge::revm::interpreter::primitives::db::Database\">Database</a>&gt;::<a class=\"associatedtype\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html#associatedtype.Error\" title=\"type forge::revm::interpreter::primitives::db::Database::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Get basic account information.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.code_by_hash\" class=\"method trait-impl\"><a href=\"#method.code_by_hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forge/revm/interpreter/primitives/db/trait.Database.html#tymethod.code_by_hash\" class=\"fn\">code_by_hash</a>(\n    &amp;mut self,\n    code_hash: <a class=\"struct\" href=\"forge/revm/interpreter/primitives/struct.FixedBytes.html\" title=\"struct forge::revm::interpreter::primitives::FixedBytes\">FixedBytes</a>&lt;32&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.Bytecode.html\" title=\"enum forge::revm::interpreter::primitives::Bytecode\">Bytecode</a>, &lt;<a class=\"struct\" href=\"forge/revm/struct.State.html\" title=\"struct forge::revm::State\">State</a>&lt;DB&gt; as <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html\" title=\"trait forge::revm::interpreter::primitives::db::Database\">Database</a>&gt;::<a class=\"associatedtype\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html#associatedtype.Error\" title=\"type forge::revm::interpreter::primitives::db::Database::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Get account code by its hash.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.storage\" class=\"method trait-impl\"><a href=\"#method.storage\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forge/revm/interpreter/primitives/db/trait.Database.html#tymethod.storage\" class=\"fn\">storage</a>(\n    &amp;mut self,\n    address: <a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a>,\n    index: <a class=\"struct\" href=\"forge/revm/interpreter/primitives/alloy_primitives/struct.Uint.html\" title=\"struct forge::revm::interpreter::primitives::alloy_primitives::Uint\">Uint</a>&lt;256, 4&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"forge/revm/interpreter/primitives/alloy_primitives/struct.Uint.html\" title=\"struct forge::revm::interpreter::primitives::alloy_primitives::Uint\">Uint</a>&lt;256, 4&gt;, &lt;<a class=\"struct\" href=\"forge/revm/struct.State.html\" title=\"struct forge::revm::State\">State</a>&lt;DB&gt; as <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html\" title=\"trait forge::revm::interpreter::primitives::db::Database\">Database</a>&gt;::<a class=\"associatedtype\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html#associatedtype.Error\" title=\"type forge::revm::interpreter::primitives::db::Database::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Get storage value of address at index.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.block_hash\" class=\"method trait-impl\"><a href=\"#method.block_hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forge/revm/interpreter/primitives/db/trait.Database.html#tymethod.block_hash\" class=\"fn\">block_hash</a>(\n    &amp;mut self,\n    number: <a class=\"struct\" href=\"forge/revm/interpreter/primitives/alloy_primitives/struct.Uint.html\" title=\"struct forge::revm::interpreter::primitives::alloy_primitives::Uint\">Uint</a>&lt;256, 4&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"forge/revm/interpreter/primitives/struct.FixedBytes.html\" title=\"struct forge::revm::interpreter::primitives::FixedBytes\">FixedBytes</a>&lt;32&gt;, &lt;<a class=\"struct\" href=\"forge/revm/struct.State.html\" title=\"struct forge::revm::State\">State</a>&lt;DB&gt; as <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html\" title=\"trait forge::revm::interpreter::primitives::db::Database\">Database</a>&gt;::<a class=\"associatedtype\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html#associatedtype.Error\" title=\"type forge::revm::interpreter::primitives::db::Database::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Get block hash by block number.</div></details></div></details>","Database","forge::revm::StateDBBox"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DatabaseCommit-for-State%3CDB%3E\" class=\"impl\"><a href=\"#impl-DatabaseCommit-for-State%3CDB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;DB&gt; <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseCommit.html\" title=\"trait forge::revm::interpreter::primitives::db::DatabaseCommit\">DatabaseCommit</a> for <a class=\"struct\" href=\"forge/revm/struct.State.html\" title=\"struct forge::revm::State\">State</a>&lt;DB&gt;<div class=\"where\">where\n    DB: <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html\" title=\"trait forge::revm::interpreter::primitives::db::Database\">Database</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.commit\" class=\"method trait-impl\"><a href=\"#method.commit\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forge/revm/interpreter/primitives/db/trait.DatabaseCommit.html#tymethod.commit\" class=\"fn\">commit</a>(&amp;mut self, evm_state: <a class=\"struct\" href=\"forge/revm/precompile/struct.HashMap.html\" title=\"struct forge::revm::precompile::HashMap\">HashMap</a>&lt;<a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a>, <a class=\"struct\" href=\"forge/revm/interpreter/primitives/struct.Account.html\" title=\"struct forge::revm::interpreter::primitives::Account\">Account</a>&gt;)</h4></section></summary><div class='docblock'>Commit changes to the database.</div></details></div></details>","DatabaseCommit","forge::revm::StateDBBox"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-State%3CDB%3E\" class=\"impl\"><a href=\"#impl-Debug-for-State%3CDB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;DB&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"forge/revm/struct.State.html\" title=\"struct forge::revm::State\">State</a>&lt;DB&gt;<div class=\"where\">where\n    DB: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","forge::revm::StateDBBox"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-State%3CDB%3E\" class=\"impl\"><a href=\"#impl-State%3CDB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;DB&gt; <a class=\"struct\" href=\"forge/revm/struct.State.html\" title=\"struct forge::revm::State\">State</a>&lt;DB&gt;<div class=\"where\">where\n    DB: <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html\" title=\"trait forge::revm::interpreter::primitives::db::Database\">Database</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.bundle_size_hint\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"forge/revm/struct.State.html#tymethod.bundle_size_hint\" class=\"fn\">bundle_size_hint</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns the size hint for the inner bundle state.\nSee <a href=\"forge/revm/db/struct.BundleState.html#method.size_hint\" title=\"method forge::revm::db::BundleState::size_hint\">BundleState::size_hint</a> for more info.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.increment_balances\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"forge/revm/struct.State.html#tymethod.increment_balances\" class=\"fn\">increment_balances</a>(\n    &amp;mut self,\n    balances: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = (<a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>)&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, &lt;DB as <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html\" title=\"trait forge::revm::interpreter::primitives::db::Database\">Database</a>&gt;::<a class=\"associatedtype\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html#associatedtype.Error\" title=\"type forge::revm::interpreter::primitives::db::Database::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Iterate over received balances and increment all account balances.\nIf account is not found inside cache state it will be loaded from database.</p>\n<p>Update will create transitions for all accounts that are updated.</p>\n<p>Like <a href=\"forge/revm/db/states/struct.CacheAccount.html#method.increment_balance\" title=\"method forge::revm::db::states::CacheAccount::increment_balance\">CacheAccount::increment_balance</a>, this assumes that incremented balances are not\nzero, and will not overflow once incremented. If using this to implement withdrawals, zero\nbalances must be filtered out before calling this function.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.drain_balances\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"forge/revm/struct.State.html#tymethod.drain_balances\" class=\"fn\">drain_balances</a>(\n    &amp;mut self,\n    addresses: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a>&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>&gt;, &lt;DB as <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html\" title=\"trait forge::revm::interpreter::primitives::db::Database\">Database</a>&gt;::<a class=\"associatedtype\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html#associatedtype.Error\" title=\"type forge::revm::interpreter::primitives::db::Database::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Drain balances from given account and return those values.</p>\n<p>It is used for DAO hardfork state change to move values from given accounts.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_state_clear_flag\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"forge/revm/struct.State.html#tymethod.set_state_clear_flag\" class=\"fn\">set_state_clear_flag</a>(&amp;mut self, has_state_clear: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>)</h4></section></summary><div class=\"docblock\"><p>State clear EIP-161 is enabled in Spurious Dragon hardfork.</p>\n</div></details><section id=\"method.insert_not_existing\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"forge/revm/struct.State.html#tymethod.insert_not_existing\" class=\"fn\">insert_not_existing</a>(&amp;mut self, address: <a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a>)</h4></section><section id=\"method.insert_account\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"forge/revm/struct.State.html#tymethod.insert_account\" class=\"fn\">insert_account</a>(&amp;mut self, address: <a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a>, info: <a class=\"struct\" href=\"forge/revm/interpreter/primitives/struct.AccountInfo.html\" title=\"struct forge::revm::interpreter::primitives::AccountInfo\">AccountInfo</a>)</h4></section><section id=\"method.insert_account_with_storage\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"forge/revm/struct.State.html#tymethod.insert_account_with_storage\" class=\"fn\">insert_account_with_storage</a>(\n    &amp;mut self,\n    address: <a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a>,\n    info: <a class=\"struct\" href=\"forge/revm/interpreter/primitives/struct.AccountInfo.html\" title=\"struct forge::revm::interpreter::primitives::AccountInfo\">AccountInfo</a>,\n    storage: <a class=\"struct\" href=\"forge/revm/precompile/struct.HashMap.html\" title=\"struct forge::revm::precompile::HashMap\">HashMap</a>&lt;<a class=\"struct\" href=\"forge/revm/interpreter/primitives/alloy_primitives/struct.Uint.html\" title=\"struct forge::revm::interpreter::primitives::alloy_primitives::Uint\">Uint</a>&lt;256, 4&gt;, <a class=\"struct\" href=\"forge/revm/interpreter/primitives/alloy_primitives/struct.Uint.html\" title=\"struct forge::revm::interpreter::primitives::alloy_primitives::Uint\">Uint</a>&lt;256, 4&gt;&gt;,\n)</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.apply_transition\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"forge/revm/struct.State.html#tymethod.apply_transition\" class=\"fn\">apply_transition</a>(\n    &amp;mut self,\n    transitions: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;(<a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a>, <a class=\"struct\" href=\"forge/revm/struct.TransitionAccount.html\" title=\"struct forge::revm::TransitionAccount\">TransitionAccount</a>)&gt;,\n)</h4></section></summary><div class=\"docblock\"><p>Apply evm transitions to transition state.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.merge_transitions\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"forge/revm/struct.State.html#tymethod.merge_transitions\" class=\"fn\">merge_transitions</a>(&amp;mut self, retention: <a class=\"enum\" href=\"forge/revm/db/states/bundle_state/enum.BundleRetention.html\" title=\"enum forge::revm::db::states::bundle_state::BundleRetention\">BundleRetention</a>)</h4></section></summary><div class=\"docblock\"><p>Take all transitions and merge them inside bundle state.\nThis action will create final post state and all reverts so that\nwe at any time revert state of bundle to the state before transition\nis applied.</p>\n</div></details><section id=\"method.load_cache_account\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"forge/revm/struct.State.html#tymethod.load_cache_account\" class=\"fn\">load_cache_account</a>(\n    &amp;mut self,\n    address: <a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&amp;mut <a class=\"struct\" href=\"forge/revm/db/states/struct.CacheAccount.html\" title=\"struct forge::revm::db::states::CacheAccount\">CacheAccount</a>, &lt;DB as <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html\" title=\"trait forge::revm::interpreter::primitives::db::Database\">Database</a>&gt;::<a class=\"associatedtype\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html#associatedtype.Error\" title=\"type forge::revm::interpreter::primitives::db::Database::Error\">Error</a>&gt;</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.take_bundle\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"forge/revm/struct.State.html#tymethod.take_bundle\" class=\"fn\">take_bundle</a>(&amp;mut self) -&gt; <a class=\"struct\" href=\"forge/revm/db/struct.BundleState.html\" title=\"struct forge::revm::db::BundleState\">BundleState</a></h4></section></summary><div class=\"docblock\"><p>Takes changeset and reverts from state and replaces it with empty one.\nThis will trop pending Transition and any transitions would be lost.</p>\n<p>NOTE: If either:</p>\n<ul>\n<li>The <a href=\"forge/revm/struct.State.html\" title=\"struct forge::revm::State\">State</a> has not been built with <a href=\"forge/revm/struct.StateBuilder.html#method.with_bundle_update\" title=\"method forge::revm::StateBuilder::with_bundle_update\">StateBuilder::with_bundle_update</a>, or</li>\n<li>The <a href=\"forge/revm/struct.State.html\" title=\"struct forge::revm::State\">State</a> has a <a href=\"forge/revm/struct.TransitionState.html\" title=\"struct forge::revm::TransitionState\">TransitionState</a> set to <code>None</code> when\n<a href=\"forge/revm/struct.State.html#method.merge_transitions\" title=\"method forge::revm::State::merge_transitions\">State::merge_transitions</a> is called,</li>\n</ul>\n<p>this will panic.</p>\n</div></details></div></details>",0,"forge::revm::StateDBBox"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()